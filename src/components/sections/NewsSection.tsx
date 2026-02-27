import { Card, CardBody } from "@heroui/react";
import { Link } from "react-router-dom";

export const LATEST_NEWS = [
    {
        id: 1,
        date: "FEBRUARY 26, 2026",
        category: "MUSIC",
        title: "The End of Silence: Astride Debuts with 'In the Dark'",
        excerpt: "The singer's debut single transforms emotional chaos into an arena anthem about finding 'gold' in the middle of absolute nothingness.",
        body: (
            <>
                <p>If you thought alternative rock was doomed to another decade of generic choruses and lazy synthesizers, Astride just kicked the door down. Released globally on February 26th, the highly anticipated debut single <strong className="text-astrideCyan">"In the Dark"</strong> is already available on all streaming platforms (yes, even on YouTube, for those who still like to watch the visualizer on repeat).</p>
                <p>The track isn't just an introduction to the artist's impeccable voice — which goes from a vulnerable whisper to a tearing drive without breaking a sweat — but also a brutally honest love letter. The lyrics address that exact moment when the world seems to have crashed with the blue screen of death, and someone appears to force a reboot.</p>

                <h3 className="text-astrideCyan font-bold text-2xl mt-8 mb-4 uppercase tracking-wider">The Engineering of Chaos</h3>
                <p>Behind the polished production, there was a true development hell. Sources close to the production claim that finding the perfect arrangement for "In the Dark" required a level of effort and iteration that would make any project manager cry. The chorus — the backbone of the song — was rewritten and restructured multiple times. The core idea, however, survived all cuts: the metaphor of a love that is the <strong className="text-primary">"gold in the dark"</strong>.</p>

                <p>And the persistence paid off. When Astride sings the verses:</p>
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-white/90 text-xl md:text-2xl drop-shadow-[0_0_10px_rgba(249,168,38,0.2)]">
                    "You're the gold in the dark, / Higher than the stars, / Burning through my heart."
                </blockquote>

                <p>It becomes clear that the song was written for the love of her life. It's not about a magical fairy tale crush, but about the anchor that stops you from drowning when gravity fails. It's about who makes "the ordinary feel like a victory".</p>

                <h3 className="text-astrideMagenta font-bold text-2xl mt-8 mb-4 uppercase tracking-wider">Verdict</h3>
                <p>"In the Dark" delivers a nostalgic atmosphere of icons like Evanescence and Linkin Park, but with a sonic architecture that is undeniably 2026. Astride isn't asking for permission to enter the scene; she's demanding attention. If this is just the first release, the foundations of pop/rock are about to undergo a serious stress test.</p>
            </>
        )
    }
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
