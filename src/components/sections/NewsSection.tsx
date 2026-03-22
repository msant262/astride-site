import { Card, CardBody } from "@heroui/react";
import { Link } from "react-router-dom";

export const LATEST_NEWS = [
    {
        id: 4,
        date: "MARCH 22, 2026",
        category: "RELEASE",
        title: "Villains and Lovers: The Subversive Chemistry and Magnetic Chaos of 'Anti-Hero'",
        excerpt: "Astride's upcoming release promises to deconstruct romance as we know it. A poetic and provocative dive into the mind of someone who embraces the chaos and pulls the strings of their own toxic game.",
        body: (
            <div className="space-y-6">
                <p>Get ready to archive all the sugar-coated fairy tales in your playlist. The music industry has an exhausting tendency to sanitize love, reducing it to broken hearts or childish declarations. But in her latest announcement, Astride warns that the rules of the game have changed. <strong>"Anti-Hero"</strong> is not a cautious plea for affection; it's a spectacular affront, a smiling act of arson right in the middle of the living room.</p>
                <p>From the first verses leaked to the press, it's clear that the song's structure is built on a dangerous flirtation with the limits of power dynamics. Astride sings to that archetype of the dark, closed-off partner who hides behind layers of defensive attitude:</p>
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-white/90 text-xl font-medium tracking-wide drop-shadow-[0_0_10px_rgba(249,168,38,0.2)]">
                    "The sun is shining but you love the dark... You say you're danger, you say you're bad / But I'm the wildest dream you ever had!"
                </blockquote>
                <p>In this single stanza, she completely flips the narrative. The narrative genius lies in stripping the supposed "villain" of their power by pointing out their hidden vulnerability. By singing <em>"I call your bluff"</em>, the lyrical persona tears the mask off her partner, exposing that all that impenetrable bad-boy posturing is just a facade against the inescapable gravitational pull she exerts.</p>
                <p>It's impossible not to get chills with the construction of the central metaphor, where the male ego confronts an uncontrollable force of nature:</p>
                <blockquote className="border-l-4 border-astrideMagenta pl-6 my-8 italic text-white/90 text-xl font-medium tracking-wide drop-shadow-[0_0_10px_rgba(255,0,255,0.2)]">
                    "A beautiful poison, a dangerous game / But you're a moth flying straight to my flame!... Think you're the villain, think you run the show? / But I'm pulling the strings and now you know!"
                </blockquote>
                <p>Astride intimately understands the magnetism of toxicity. Instead of running from it — as all therapists and self-help songs would suggest — she embraces it and says: "I can be worse, and isn't it liberating?". With the admission of <em>"Living like a rebel but I smile like a child!"</em>, she humanizes anti-heroism, stripping the relationship of external moral judgment. "Anti-Hero" doesn't just break the current rules of modern indie-rock/pop; it rewrites them in neon ink, demanding the crown for herself while the whole world watches the flames dance.</p>
            </div>
        )
    },
    {
        id: 3,
        date: "MARCH 18, 2026",
        category: "ANALYSIS",
        title: "Dancing in the Eye of the Storm: The Anatomy of Liberation and Pain in 'Hurricane'",
        excerpt: "Forget passive sadness. In 'Hurricane', pain isn't the end of the line, it's the prelude to the most absolute revolt of survival. A visceral anthem about turning tears into weaponry.",
        body: (
            <div className="space-y-6">
                <p>There are ballads about sadness, and then there is <strong>"Hurricane"</strong>. While most pop artists are content with scratching the surface of depression with slow choruses and funeral pianos, Astride opted for a much rawer and, paradoxically, vital and explosive approach. The song captures the exact moment when agonizing apathy converts into driving fury. It's a rite of passage translated into masterful chords.</p>
                <p>The first act of the song is purposefully nihilistic. Astride murmurs about the emotional fading that strikes a wounded soul, in an almost conversational tone that borders on total resignation. The boredom of endless suffering:</p>
                <blockquote className="border-l-4 border-white/50 pl-6 my-8 italic text-white/70 text-lg">
                    "Gray skies... whatever. / Rain falling... it doesn't matter... Waiting for the sun? Nah, I'm over it / Sitting in the dark, yeah, I'm used to it"
                </blockquote>
                <p>We could have an entire song built on this lethargy, but then the ticking of the clock enters. There's a tectonic tremor in the production. <em>"Something's waking up down below"</em>, and it's at that moment that the song shifts from a painful soliloquy to the artist's most formidable declaration of independence. And then, the drums and the electric storm crash down. It's raw catharsis.</p>
                <blockquote className="border-l-4 border-astrideCyan pl-6 my-8 italic text-white/90 text-2xl font-bold tracking-wide drop-shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                    "I'm dancing in the hurricane, breaking every chain / Got the lightning in my eyes, sunshine in my veins!"
                </blockquote>
                <p>This chorus is a true catharsis. The lyricism elevates itself by embracing destruction rather than trying to take shelter from it. Escaping the scars unscathed, according to Astride, is not the goal. By belting out <em>"Barefoot on the ground, jumping over scars"</em>, she rejects the <em>"gold and glitter"</em> (the fake gold and shine) in a violent refusal to return to the same vices and toxicities disguised as stability.</p>
                <p>However, the most devastating of all the tracks' lines, the one that defines all the resilience of this masterpiece that already resonates in the hearts of fans globally, resides near the closing:</p>
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-primary/90 text-2xl drop-shadow-[0_0_10px_rgba(249,168,38,0.2)]">
                    "Every single tear that fell on the floor / Just watered the seed, now hear me roar!"
                </blockquote>
                <p>Astride's tears cease to be seen as traces of weakness, to become, symbolically, the water necessary to nourish a beautiful and unstoppable monstrosity that was only waiting for the occasion to bloom. Anyone who tries to face her at this moment will inevitably be swept away by the storm.</p>
            </div>
        )
    },
    {
        id: 2,
        date: "MARCH 10, 2026",
        category: "MUSIC / REVIEW",
        title: "The Pulse of Neon: How Astride Redefined Intimacy in the Era of Synthetic Noise",
        excerpt: "A deafening love letter to the real companionship that saves lost people. In 'Neon', the brightest light doesn't come from the street, but from two hands joined in the dark.",
        body: (
            <div className="space-y-6">
                <p>There are bonds so deep and visceral that ordinary words fail to capture them. When modern life becomes deafening — with its overpopulated cities, glowing screens, and permanent exhaustion — we all secretly look for a grounding wire. When <strong>"Neon"</strong> was released to the world, the entire planet didn't just listen, but swallowed every stanza dry as if taking an antidote they didn't know they needed.</p>
                <p>The poignant genius of "Neon" comes straight from its terrifying ability to map postmodern anxiety and cure it in a chorus. The opening lines paint a devastatingly real landscape of running on empty:</p>
                <blockquote className="border-l-4 border-astrideCyan pl-6 my-8 italic text-white/90 text-xl font-medium tracking-wide drop-shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                    "I’ve been running on fumes, on ghosts, on noise, / building walls out of 'maybe' and broken choices."
                </blockquote>
                <p>This is the vulnerable confession of a survivor running on an empty tank. It's a cry for help that millions have replicated. And it is exactly after mirroring this absolute fatigue that the song delivers its sonic miracle — the touch of another person capable of anchoring such a drift. <em>"Then you lean in close, and the chaos slows / like the world remembers what my heart knows."</em> The rhythm changes organically, the chaos recedes, and the melody embraces the singer's powerful and velvety vocals in an indescribable way.</p>
                <p>The true poetry, however, lives in the brutal acceptance of the breaks:</p>
                <blockquote className="border-l-4 border-astrideMagenta pl-6 my-8 italic text-white/90 text-xl font-medium tracking-wide drop-shadow-[0_0_10px_rgba(255,0,255,0.2)]">
                    "If I crack, you don't flinch, you don't fade, / you hold the mess like a promise made. / And I don't need saving, I just need truth, / and you feel like proof…"
                </blockquote>
                <p>This stanza provoked rivers of tears in fans who cried online about their broken and mended hearts. In a world of toxic positivity and demands for continuous perfection, someone saying "when I break, you don't flinch" elevates the music to an unshakable declaration of pure psychic safety. Astride rejects the archetype of the white knight who saves the damsel, seeking only someone real ("I don't need saving, I just need truth").</p>
                <p>And the bridge is an unadorned confession: <em>"just two wild hearts learning how to fight… / for something true…"</em> The crowd, since the release, echoed the cry of "NE-ON", realizing that Astride's true "voltage in the veins" and our great haven, are not illuminated castles and perfect princes. The charm is simply "us against the static of the world". This is not just musical talent; this is unbridled artistic compassion.</p>
            </div>
        )
    },
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
