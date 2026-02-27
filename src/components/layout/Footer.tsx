import { Input, Button } from "@heroui/react";

export const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-astrideMagenta/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-astrideMagenta/5 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-16 relative z-10">

                {/* LOGO AND COPYRIGHT */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-6xl font-black text-primary tracking-[0.2em] uppercase">Astride</h2>
                    <p className="mt-8 text-foreground/50 text-sm font-light tracking-widest uppercase mb-8">
                        &copy; 2026 Astride Official.<br /> All Rights Reserved.
                    </p>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-4">
                        <a href="#" className="w-14 h-14 rounded-full border border-astrideCyan/30 flex items-center justify-center hover:bg-astrideCyan hover:text-black transition-all text-xl font-bold">
                            IG
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full border border-astrideMagenta/30 flex items-center justify-center hover:bg-astrideMagenta hover:text-white transition-all text-xl font-bold">
                            TT
                        </a>
                        <a href="#" className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:text-black transition-all text-xl font-bold">
                            YT
                        </a>
                    </div>
                </div>

                {/* NEWSLETTER VIA HERO UI */}
                <div className="flex flex-col items-center md:items-end w-full max-w-sm">
                    <span className="text-base font-bold text-astrideMagenta tracking-[0.3em] uppercase mb-6">Stay In The Dark</span>
                    <div className="flex w-full flex-col sm:flex-row gap-4 items-center">
                        <Input
                            type="email"
                            placeholder="YOUR EMAIL"
                            variant="bordered"
                            radius="none"
                            size="lg"
                            classNames={{
                                inputWrapper: "border-white/20 focus-within:!border-astrideCyan bg-white/5",
                                input: "text-white font-mono tracking-widest placeholder:text-white/30"
                            }}
                        />
                        <Button
                            radius="none"
                            size="lg"
                            className="bg-primary text-black font-black uppercase tracking-widest px-8 w-full sm:w-auto h-[64px]"
                        >
                            JOIN
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
