import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LATEST_NEWS } from '../components/sections/NewsSection';

export const NewsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-astrideBlack text-white">
            <Navbar />

            <main className="flex-grow pt-32 pb-40 px-6 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-astrideMagenta/5 rounded-full blur-[200px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-astrideCyan/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-4xl mx-auto w-full z-10 relative">
                    <header className="mb-20 text-center border-b border-white/5 pb-12">
                        <span className="text-xl font-bold text-astrideCyan tracking-[0.5em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">Updates & Stories</span>
                        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-astrideCyan via-white to-astrideMagenta uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] my-6">
                            News
                        </h1>
                    </header>

                    <div className="flex flex-col gap-12">
                        {LATEST_NEWS.map((news, index) => (
                            <article key={news.id} className="flex flex-col gap-6 py-10 border-b border-white/10 group">
                                <div className="flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase">
                                    <span className="text-primary">{news.date}</span>
                                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full" />
                                    <span className={`text-${index % 2 === 0 ? 'astrideCyan' : 'astrideMagenta'} drop-shadow-md`}>{news.category}</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-wide group-hover:text-astrideCyan transition-colors leading-tight">
                                    {news.title}
                                </h2>

                                <p className="text-white/60 font-light text-lg md:text-xl leading-relaxed mt-4">
                                    {news.excerpt}
                                </p>

                                {/* Simulated Blog Content. Using standard text for mock detail. */}
                                <div className="text-white/40 font-light mt-4 space-y-4">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                    </p>
                                    <p>
                                        Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                                    <a href="#" className="font-bold text-astrideMagenta uppercase tracking-[0.2em] hover:text-white transition-colors">Read Full Article</a>
                                    <div className="flex gap-4">
                                        <span className="text-white/30 text-xs tracking-widest uppercase">Share</span>
                                        <span className="w-1 h-3 bg-astrideCyan rotate-12" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};
