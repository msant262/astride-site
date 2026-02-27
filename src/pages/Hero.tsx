import { useRef } from 'react';
import { useEntranceAnimation } from '../hooks/useEntranceAnimation';
import { AstrideButton } from '../components/ui/AstrideButton';


export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    // Clean animation logic hidden inside hooks
    useEntranceAnimation({ elementRef: containerRef, delay: 0 });
    useEntranceAnimation({ elementRef: headingRef, delay: 500, distance: 30 });
    useEntranceAnimation({ elementRef: textRef, delay: 700, distance: 30 });
    useEntranceAnimation({ elementRef: ctaRef, delay: 900, distance: 40 });

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center opacity-0"
        >
            <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-astrideMagenta/20 via-astrideBlack to-astrideBlack" />

            <div className="z-10 flex flex-col items-center max-w-4xl px-4">
                {/* The typography respects the primary color from HeroUI config (Gold) */}
                <h1
                    ref={headingRef}
                    className="text-6xl md:text-8xl font-black text-primary tracking-tighter uppercase opacity-0"
                >
                    Astride
                </h1>

                <p
                    ref={textRef}
                    className="mt-6 text-xl md:text-2xl text-foreground/80 max-w-2xl font-light opacity-0"
                >
                    Stay in the dark. Resist the light. Experience the modern grunge era.
                </p>

                <div ref={ctaRef} className="mt-12 flex gap-6 opacity-0">
                    <AstrideButton size="lg" glowColor="magenta">
                        Listen Now
                    </AstrideButton>
                    <AstrideButton size="lg" variant="bordered" glowColor="cyan">
                        Tour Dates
                    </AstrideButton>
                </div>
            </div>
        </section>
    );
};
