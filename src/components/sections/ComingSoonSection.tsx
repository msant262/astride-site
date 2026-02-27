import { useState, useRef } from 'react';
import { Button } from "@heroui/react";
import neonAudio from '../../preview/(neon.).mp3';

export const ComingSoonSection = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    // Limit to 2:00 (120 seconds)
    const MAX_PREVIEW_TIME = 120;

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            setProgress((current / MAX_PREVIEW_TIME) * 100);

            if (current >= MAX_PREVIEW_TIME) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
                setIsPlaying(false);
            }
        }
    };
    return (
        <section id="merch" className="py-40 bg-black relative flex flex-col items-center border-t border-b border-white/5 overflow-hidden">
            {/* Glitchy Neon Textures */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/4 w-[600px] h-2 bg-astrideMagenta/40 blur-[100px] -rotate-45" />
                <div className="absolute top-1/2 right-1/4 w-[600px] h-2 bg-astrideCyan/40 blur-[100px] rotate-45" />
                {/* Animated striped bg (CSS Grid trick or repeating gradient) */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)] opacity-50" />
            </div>

            <div className="max-w-4xl z-10 text-center px-6">
                <span className="block text-xl md:text-3xl font-bold text-primary tracking-[0.4em] uppercase mb-4 drop-shadow-[0_0_15px_rgba(249,168,38,0.6)] animate-pulse">
                    The Official Store
                </span>
                <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-astrideCyan via-white to-astrideMagenta uppercase tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] mix-blend-screen py-4">
                    Coming Soon
                </h2>
                <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                    <p className="text-astrideCyan font-mono tracking-widest uppercase text-sm md:text-xl drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]">
                        [ EXCLUSIVE APPAREL ]
                    </p>
                    <p className="text-astrideMagenta font-mono tracking-widest uppercase text-sm md:text-xl drop-shadow-[0_0_5px_rgba(255,0,255,0.4)]">
                        [ LIMITED DROPS ]
                    </p>
                </div>

                {/* Audio Preview Feature */}
                <div className="mt-20 w-full max-w-3xl mx-auto px-4">
                    <div className="bg-transparent border border-white/10 rounded-2xl p-6 md:p-10 relative flex flex-col items-center">
                        <p className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4 truncate">
                            Sneak Peek
                        </p>

                        <div className="flex w-full items-center gap-6 mt-2">
                            <Button
                                isIconOnly
                                radius="full"
                                size="lg"
                                className="bg-transparent text-astrideMagenta border border-astrideMagenta hover:bg-astrideMagenta/10 transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] min-w-[64px] w-[64px] h-[64px] shrink-0 !p-0 flex items-center justify-center"
                                onPress={togglePlay}
                            >
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8 translate-x-[2px]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                )}
                            </Button>

                            <div className="flex-grow text-left flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-wide">
                                    (neon.) <span className="text-white/40 text-sm font-normal ml-2 tracking-normal">(Studio Preview)</span>
                                </h3>

                                <div className="w-full h-[1px] bg-white/20 rounded-full relative overflow-visible">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-astrideMagenta transition-all duration-300"
                                        style={{ width: `${Math.min(progress, 100)}%` }}
                                    >
                                        {/* Playhead dot */}
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-astrideMagenta shadow-[0_0_12px_rgba(255,0,255,1)]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <audio
                            ref={audioRef}
                            src={neonAudio}
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={() => setIsPlaying(false)}
                            className="hidden"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
