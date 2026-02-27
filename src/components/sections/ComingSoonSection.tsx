export const ComingSoonSection = () => {
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
                <span className="block text-xl font-bold text-astrideMagenta tracking-[0.5em] uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,0,255,0.6)] animate-pulse">
                    Merch & Tour 2026/2027
                </span>
                <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-astrideCyan via-white to-astrideMagenta uppercase tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)] mix-blend-screen py-4">
                    Coming Soon
                </h2>
                <p className="mt-8 text-white/50 font-mono tracking-widest uppercase text-sm md:text-lg">
                    Exclusive Apparels. Limited Drops. Stay In The Dark.
                </p>
            </div>
        </section>
    );
};
