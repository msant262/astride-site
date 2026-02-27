import { Card, CardBody, CardHeader } from "@heroui/react";

export const LatestReleaseSection = () => {
    return (
        <section id="music" className="py-32 bg-background relative flex flex-col items-center">
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="max-w-6xl w-full px-6 flex flex-col items-center">
                {/* HEADER AREA */}
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-primary tracking-[0.3em] uppercase mb-4">Releases [2026+]</p>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_10px_rgba(249,168,38,0.2)]">
                        Latest Single
                    </h2>
                </div>

                {/* MUSIC EMBEDS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mt-8">

                    {/* SPOTIFY EMBED (TRACK) */}
                    <Card
                        isBlurred
                        className="bg-black/50 border border-white/5 shadow-2xl overflow-visible w-full rounded-3xl"
                    >
                        <CardHeader className="flex flex-col gap-1 items-center pb-2 pt-8">
                            <p className="text-sm font-black text-[#1DB954] uppercase tracking-[0.2em]">Spotify Direct</p>
                        </CardHeader>
                        <CardBody className="p-8">
                            {/* 
                  Using the specific Track embed rather than Artist embed, to focus only on the latest track 
                */}
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/track/2VMozHf98XPWim2GEM5pr3?utm_source=generator&theme=0"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </CardBody>
                    </Card>

                    {/* APPLE MUSIC EMBED */}
                    <Card
                        isBlurred
                        className="bg-black/50 border border-white/5 shadow-2xl overflow-visible w-full rounded-3xl"
                    >
                        <CardHeader className="flex flex-col gap-1 items-center pb-2 pt-8">
                            <p className="text-sm font-black text-[#FC3C44] uppercase tracking-[0.2em]">Apple Music</p>
                        </CardHeader>
                        <CardBody className="p-8 h-[416px]">
                            {/* 
                  Fixed the URL for Apple Music Embed by removing the language params which often break the iframe.
                  https://music.apple.com/br/album/in-the-dark-single/1880134422
                */}
                            <iframe
                                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                                frameBorder="0"
                                height="352"
                                style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '12px' }}
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                src="https://embed.music.apple.com/br/album/in-the-dark-single/1880134422">
                            </iframe>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </section>
    );
};
