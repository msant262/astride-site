import { Card, CardBody } from "@heroui/react";
import { Link } from "react-router-dom";

export const LATEST_NEWS = [
    { id: 1, date: "FEBRUARY 27, 2026", category: "MUSIC", title: "Astride Releases Brutal New Single 'In The Dark'", excerpt: "The new pop-rock metal infused single is shaking the underground scene..." },
    { id: 2, date: "FEBRUARY 15, 2026", category: "TOUR", title: "European Tour Dates Teased for Late 2026", excerpt: "After a monumental US run, Astride hints at bringing 'The Void' to Europe." },
    { id: 3, date: "JANUARY 10, 2026", category: "STUDIO", title: "Inside The Void: Recording Sessions Leaked", excerpt: "Exclusive behind-the-scenes look at the rigorous studio marathon process." },
    { id: 4, date: "DECEMBER 05, 2025", category: "MERCH", title: "Winter Drop: The 'Resilience' Collection Sold Out", excerpt: "In record time, the exclusive winter apparel collection disappeared." },
    { id: 5, date: "NOVEMBER 20, 2025", category: "AWARD", title: "Best New Rock Vocalist Nomination", excerpt: "Astride sweeps nominations in the underground modern grunge categories." }
];

export const NewsSection = () => {
    return (
        <section id="news" className="py-32 bg-background flex flex-col items-center w-full px-6 relative">
            <div className="absolute right-0 top-1/2 w-64 h-64 bg-astrideMagenta/10 blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="max-w-6xl w-full">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6 relative">
                    <div className="absolute left-0 bottom-0 w-1/3 h-[1px] bg-gradient-to-r from-astrideCyan to-transparent" />

                    <div>
                        <p className="text-sm font-bold text-astrideCyan tracking-[0.3em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">Updates</p>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-widest">
                            Latest News
                        </h2>
                    </div>

                    <Link
                        to="/news"
                        className="mt-6 md:mt-0 font-bold text-astrideMagenta hover:text-white uppercase tracking-widest text-sm border border-astrideMagenta/30 px-6 py-3 rounded-full hover:bg-astrideMagenta/10 transition-colors shadow-[0_0_10px_rgba(255,0,255,0.1)] hover:shadow-[0_0_15px_rgba(255,0,255,0.4)]"
                    >
                        VIEW ALL NEWS
                    </Link>
                </div>

                <div className="flex flex-col gap-4">
                    {LATEST_NEWS.map((news, index) => (
                        <Link to={`/news`} key={news.id} className="block group">
                            <Card
                                isPressable
                                className="w-full bg-black/40 hover:bg-black border border-white/5 group-hover:border-astrideCyan/50 transition-all duration-300 shadow-none hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] rounded-xl"
                            >
                                <CardBody className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
                                    {/* Subtle hover background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-astrideCyan/0 via-astrideCyan/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 pointer-events-none" />

                                    <div className="flex flex-col gap-2 z-10 w-full md:w-3/4">
                                        <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] uppercase">
                                            <span className="text-primary">{news.date}</span>
                                            <span className="w-1 h-1 bg-white/50 rounded-full" />
                                            <span className={`text-${index % 2 === 0 ? 'astrideCyan' : 'astrideMagenta'} drop-shadow-md`}>{news.category}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide group-hover:text-astrideCyan transition-colors">
                                            {news.title}
                                        </h3>
                                        <p className="text-white/50 font-light mt-1 text-sm md:text-base">
                                            {news.excerpt}
                                        </p>
                                    </div>

                                    <div className="z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:border-astrideMagenta group-hover:bg-astrideMagenta/10 transition-all text-white/30 group-hover:text-astrideMagenta">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </CardBody>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
