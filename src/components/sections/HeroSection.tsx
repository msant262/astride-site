import { useRef } from 'react';
import { useEntranceAnimation } from '../../hooks/useEntranceAnimation';
import { Button } from "@heroui/react";
import heroVideo from '../../img/Neon_Lyrics.mov';

export const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEntranceAnimation({ elementRef: containerRef, delay: 0, duration: 2000 });
    useEntranceAnimation({ elementRef: headingRef, delay: 500, distance: 30 });
    useEntranceAnimation({ elementRef: textRef, delay: 1000, distance: 20 });

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-[100svh] overflow-hidden bg-background opacity-0"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0 bg-[#061320]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-90"
                >
                    <source src={heroVideo} />
                </video>

                {/* Soft overlay to ensure readability */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,168,38,0.1)_0%,transparent_60%)] mix-blend-lighten" />
            </div>

            <div className="z-20 w-full flex flex-col justify-center items-center pb-12 max-w-7xl px-6 text-center h-full relative">
                <h1
                    ref={headingRef}
                    className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[14rem] font-script text-white leading-none tracking-normal opacity-0 select-none drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                    style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(249, 168, 38, 0.5)" }}
                >
                    Astride
                </h1>

                <div ref={textRef} className="opacity-0 z-10 w-full flex flex-col justify-center items-center mt-2 md:mt-4 gap-8">
                    <a href="#about">
                        <Button
                            size="lg"
                            color="primary"
                            variant="solid"
                            className="h-12 md:h-14 px-10 md:px-14 text-sm md:text-base font-bold uppercase tracking-[0.3em] rounded-full shadow-[0_0_20px_5px_rgba(249,168,38,0.4)] hover:shadow-[0_0_30px_10px_rgba(249,168,38,0.6)] hover:scale-105 transition-all text-black"
                        >
                            Enter
                        </Button>
                    </a>

                    {/* Social Icons */}
                    <div className="flex gap-5 items-center">
                        <a href="https://open.spotify.com/artist/6zla1Vobe9SgbR9cty1mr9?si=ivsPLOtqRGyHPZ2-ANtU0w" target="_blank" rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full border border-astrideCyan/40 flex items-center justify-center text-white/60 hover:bg-astrideCyan hover:text-black hover:border-astrideCyan transition-all shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.518 17.338c-.212.348-.667.458-1.01.246-2.766-1.69-6.248-2.073-10.366-1.135-.395.09-.785-.158-.875-.552-.09-.395.158-.785.552-.875 4.502-1.026 8.353-.591 11.455 1.306.342.21.452.665.244 1.01zm1.438-3.186c-.266.435-.838.572-1.275.305-3.18-1.954-8.074-2.542-11.776-1.391-.502.155-1.033-.125-1.189-.627-.156-.502.125-1.032.627-1.188 4.265-1.326 9.68-0.666 13.31 1.565.435.266.572.839.303 1.276h.001zm.14-3.321c-3.816-2.264-10.09-2.47-13.725-1.365-.592.179-1.218-.156-1.397-.749-.18-.593.156-1.219.749-1.397 4.19-1.274 11.137-1.037 15.539 1.574.526.312.698 1.002.386 1.528-.313.525-1.003.696-1.528.384L19.096 7.5z" /></svg>
                        </a>
                        <a href="https://www.youtube.com/@astrideoficial" target="_blank" rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full border border-astrideMagenta/40 flex items-center justify-center text-white/60 hover:bg-astrideMagenta hover:text-white hover:border-astrideMagenta transition-all shadow-[0_0_10px_rgba(255,0,255,0.1)] hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://instagram.com/official.astride" target="_blank" rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full border border-primary/40 flex items-center justify-center text-white/60 hover:bg-primary hover:text-black hover:border-primary transition-all shadow-[0_0_10px_rgba(249,168,38,0.1)] hover:shadow-[0_0_20px_rgba(249,168,38,0.5)]">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
