import { useState, useRef, useEffect, useCallback } from 'react';
import neonAudio from '../../preview/(neon.).mp3';
import hurricaneAudio from '../../preview/(hurricane).mp3';
import antiHeroAudio from '../../preview/Anti-Hero.mp3';

interface Track {
    id: number;
    label: string;
    src: string;
    startTime: number; // seconds
    endTime: number;   // seconds
    fadeIn: number;    // seconds
    fadeOut: number;   // seconds
}

const TRACKS: Track[] = [
    {
        id: 1,
        label: '(neon.)',
        src: neonAudio,
        startTime: 0,
        endTime: 120,
        fadeIn: 1.5,
        fadeOut: 3,
    },
    {
        id: 2,
        label: '(hurricane)',
        src: hurricaneAudio,
        startTime: 20,
        endTime: 90,
        fadeIn: 2,
        fadeOut: 3,
    },
    {
        id: 3,
        label: 'Anti-Hero',
        src: antiHeroAudio,
        startTime: 30,
        endTime: 100,
        fadeIn: 2,
        fadeOut: 3,
    },
];

export const ComingSoonSection = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [activeTrackId, setActiveTrackId] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const fadeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const activeTrack = TRACKS.find((t) => t.id === activeTrackId) ?? null;

    const clearFade = () => {
        if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
            fadeIntervalRef.current = null;
        }
    };

    const fadeVolume = useCallback((audio: HTMLAudioElement, from: number, to: number, durationSec: number, onDone?: () => void) => {
        clearFade();
        const steps = 30;
        const stepMs = (durationSec * 1000) / steps;
        const delta = (to - from) / steps;
        let current = from;
        audio.volume = Math.max(0, Math.min(1, from));

        fadeIntervalRef.current = setInterval(() => {
            current += delta;
            audio.volume = Math.max(0, Math.min(1, current));
            if ((delta > 0 && current >= to) || (delta < 0 && current <= to)) {
                clearFade();
                audio.volume = Math.max(0, Math.min(1, to));
                onDone?.();
            }
        }, stepMs);
    }, []);

    const stopPlayback = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        clearFade();
        audio.pause();
        audio.currentTime = 0;
        audio.volume = 1;
        setIsPlaying(false);
        setProgress(0);
    }, []);

    const startTrack = useCallback((track: Track) => {
        stopPlayback();
        setActiveTrackId(track.id);
        setProgress(0);

        // Need a slight tick so the src change propagates
        setTimeout(() => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.currentTime = track.startTime;
            audio.volume = 0;
            audio.play().then(() => {
                setIsPlaying(true);
                fadeVolume(audio, 0, 1, track.fadeIn);
            }).catch(() => setIsPlaying(false));
        }, 50);
    }, [stopPlayback, fadeVolume]);

    const togglePlay = (track: Track) => {
        if (activeTrackId === track.id && isPlaying) {
            // Pause current
            clearFade();
            audioRef.current?.pause();
            setIsPlaying(false);
        } else if (activeTrackId === track.id && !isPlaying) {
            // Resume
            audioRef.current?.play().then(() => setIsPlaying(true));
        } else {
            // New track
            startTrack(track);
        }
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (!audio || !activeTrack) return;

        const current = audio.currentTime;
        const duration = activeTrack.endTime - activeTrack.startTime;
        const elapsed = current - activeTrack.startTime;
        setProgress(Math.min((elapsed / duration) * 100, 100));

        // Trigger fade-out before end
        const timeLeft = activeTrack.endTime - current;
        if (timeLeft <= activeTrack.fadeOut && timeLeft > 0 && !fadeIntervalRef.current) {
            fadeVolume(audio, audio.volume, 0, timeLeft, () => {
                audio.pause();
                audio.currentTime = activeTrack.startTime;
                audio.volume = 1;
                setIsPlaying(false);
                setProgress(0);
            });
        }

        if (current >= activeTrack.endTime) {
            stopPlayback();
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            clearFade();
            audioRef.current?.pause();
        };
    }, []);



    return (
        <section id="music" className="py-40 bg-black relative flex flex-col items-center border-t border-b border-white/5 overflow-hidden">
            {/* Glitchy Neon Textures */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/4 w-[600px] h-2 bg-astrideMagenta/40 blur-[100px] -rotate-45" />
                <div className="absolute top-1/2 right-1/4 w-[600px] h-2 bg-astrideCyan/40 blur-[100px] rotate-45" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)] opacity-50" />
            </div>

            <div className="max-w-4xl z-10 text-center px-6 w-full">
                <span className="block text-xl md:text-3xl font-bold text-primary tracking-[0.4em] uppercase mb-4 drop-shadow-[0_0_15px_rgba(249,168,38,0.6)] animate-pulse">
                    Unreleased
                </span>
                <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-astrideCyan via-white to-astrideMagenta uppercase tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] mix-blend-screen py-4">
                    Coming Soon
                </h2>

                {/* Track List */}
                <div className="mt-16 flex flex-col gap-4 w-full max-w-3xl mx-auto px-4">
                    <p className="text-white/30 text-[11px] font-bold uppercase tracking-[0.3em] mb-2 text-left">Studio Previews</p>

                    {TRACKS.map((track, idx) => {
                        const isActive = activeTrackId === track.id;

                        const styles = [
                            { border: '#FF00FF', text: '#FF00FF', bar: '#FF00FF', glow: 'rgba(255,0,255,0.35)' },
                            { border: '#00FFFF', text: '#00FFFF', bar: '#00FFFF', glow: 'rgba(0,255,255,0.35)' },
                            { border: '#F9A826', text: '#F9A826', bar: '#F9A826', glow: 'rgba(249,168,38,0.35)' },
                        ][idx % 3];

                        return (
                            <div
                                key={track.id}
                                className="bg-transparent border rounded-2xl p-5 md:p-7 relative flex items-center gap-5 transition-all duration-300"
                                style={{
                                    borderColor: isActive ? styles.border + '66' : 'rgba(255,255,255,0.1)',
                                    boxShadow: isActive ? `0 0 25px ${styles.glow}` : 'none',
                                }}
                            >
                                {/* Play/Pause Button */}
                                <button
                                    onClick={() => togglePlay(track)}
                                    className="shrink-0 w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300"
                                    style={{
                                        borderColor: isActive ? styles.border : 'rgba(255,255,255,0.2)',
                                        color: isActive ? styles.text : 'rgba(255,255,255,0.6)',
                                        backgroundColor: isActive ? styles.border + '18' : 'transparent',
                                        boxShadow: isActive ? `0 0 20px ${styles.glow}` : 'none',
                                    }}
                                    aria-label={isActive && isPlaying ? `Pause ${track.label}` : `Play ${track.label}`}
                                >
                                    {isActive && isPlaying ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 translate-x-[2px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                        </svg>
                                    )}
                                </button>

                                {/* Track Info + Progress */}
                                <div className="flex-grow text-left flex flex-col justify-center gap-3 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3
                                            className="text-lg md:text-xl font-bold tracking-wide truncate transition-colors"
                                            style={{ color: isActive ? styles.text : 'white' }}
                                        >
                                            {track.label}
                                        </h3>
                                        <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest ml-4 shrink-0">
                                            Studio Preview
                                        </span>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="w-full h-[2px] bg-white/10 rounded-full relative overflow-visible">
                                        <div
                                            className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                                            style={{
                                                width: `${isActive ? Math.min(progress, 100) : 0}%`,
                                                backgroundColor: styles.bar,
                                            }}
                                        >
                                            {isActive && (
                                                <div
                                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                                                    style={{ backgroundColor: styles.bar, boxShadow: `0 0 10px ${styles.glow}` }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Hidden audio element — src changes dynamically */}
                <audio
                    ref={audioRef}
                    src={activeTrack?.src ?? neonAudio}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => {
                        setIsPlaying(false);
                        setProgress(0);
                    }}
                    className="hidden"
                />
            </div>
        </section>
    );
};
