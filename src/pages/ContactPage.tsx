import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '@heroui/react';
import { usePageSEO } from '../hooks/usePageSEO';

export const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resultMessage, setResultMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    usePageSEO({
        title: 'Contact',
        description: 'Get in touch with Astride for bookings, press inquiries, fan mail and more.',
        url: '/contact'
    });

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResultMessage(null);

        const form = event.currentTarget;
        const formData = new FormData(form);

        // Add Web3Forms access key
        formData.append("access_key", "7d8f7a27-6aff-4bf8-afc8-ffcdcfac5648");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setResultMessage({ type: 'success', text: "MESSAGE SENT! WE'LL STAY IN TOUCH." });
                form.reset();
            } else {
                setResultMessage({ type: 'error', text: data.message || "SOMETHING WENT WRONG. PLEASE TRY AGAIN." });
            }
        } catch (error: any) {
            setResultMessage({ type: 'error', text: "ERROR: " + (error?.message || "COULD NOT CONNECT TO SERVER.") });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-astrideBlack text-white">
            <Navbar />

            <main className="flex-grow pt-40 pb-40 px-6 relative overflow-hidden flex flex-col items-center justify-center">
                {/* Background ambient glows only (No grid) */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-astrideCyan/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-astrideMagenta/10 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-2xl w-full z-10 text-center flex flex-col items-center relative">
                    <p className="text-sm font-bold text-astrideCyan tracking-[0.4em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                        Get In Touch
                    </p>
                    <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-primary uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] mb-12">
                        Contact
                    </h1>

                    <div className="w-full relative">
                        {/* Pure clean background for the form, no borders overlapping */}
                        <form onSubmit={onSubmit} className="flex flex-col gap-8 relative z-10 text-left bg-black/80 p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl">

                            {/* Standard Native Inputs wrapped tightly to prevent overlap */}
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 text-lg outline-none focus:border-astrideCyan focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    required
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 text-lg outline-none focus:border-astrideMagenta focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Booking, Press, Fan Mail..."
                                    required
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 text-lg outline-none focus:border-primary focus:bg-white/10 transition-all"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Type your message here..."
                                    required
                                    rows={5}
                                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-white/30 text-lg outline-none focus:border-white focus:bg-white/10 transition-all resize-none custom-scrollbar"
                                />
                            </div>

                            {/* Solid, serious, well-aligned Send Button */}
                            <Button
                                type="submit"
                                size="lg"
                                radius="sm"
                                isLoading={isSubmitting}
                                className="w-full bg-transparent border border-white/20 text-white font-bold uppercase tracking-[0.3em] hover:border-astrideCyan hover:text-astrideCyan transition-all h-16 mt-4 shadow-[0_0_15px_rgba(0,255,255,0)] hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] bg-black flex items-center justify-center"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>

                            {resultMessage && (
                                <div className={`p-4 rounded-xl border flex justify-center items-center ${resultMessage.type === 'success'
                                    ? 'bg-astrideCyan/10 border-astrideCyan/30 text-astrideCyan shadow-[0_0_15px_rgba(0,255,255,0.2)]'
                                    : 'bg-astrideMagenta/10 border-astrideMagenta/30 text-astrideMagenta shadow-[0_0_15px_rgba(255,0,255,0.2)]'
                                    }`}>
                                    <p className="text-sm font-bold tracking-widest uppercase text-center">
                                        {resultMessage.text}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
