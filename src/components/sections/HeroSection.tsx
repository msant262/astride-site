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

                <div ref={textRef} className="opacity-0 z-10 w-full flex justify-center mt-2 md:mt-4">
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
                </div>
            </div>
        </section>
    );
};
