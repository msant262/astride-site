import { Card, CardBody } from "@heroui/react";
import artistImg from '../../img/ADD_13(extra4).jpg';

export const BioSection = () => {
    return (
        <section id="about" className="py-32 bg-background flex flex-col items-center w-full px-6 relative overflow-hidden">
            {/* Dynamic Background Glows for Magenta and Cyan */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-astrideMagenta/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-astrideCyan/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

            <div className="max-w-7xl w-full z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-16 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-astrideCyan via-white to-astrideMagenta drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                    Bio / Identity
                </h2>

                <Card isBlurred className="border border-white/5 bg-black/60 shadow-2xl overflow-hidden rounded-3xl w-full">
                    <CardBody className="grid grid-cols-1 lg:grid-cols-2 gap-0 p-0 sm:p-0">

                        {/* IMAGE COLUMN WITH FIXED HEIGHT AND COVER */}
                        <div className="w-full h-[400px] lg:h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 z-10 hidden lg:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 lg:hidden" />
                            <img
                                src={artistImg}
                                alt="Astride Bio"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* CONTENT COLUMN */}
                        <div className="flex flex-col justify-center p-8 md:p-14 lg:p-20 gap-6 text-foreground/80 bg-black/40 relative">
                            {/* Cyan Accent bar */}
                            <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-astrideCyan via-astrideMagenta to-primary" />

                            <h3 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-[0.2em] mb-2 drop-shadow-[0_0_10px_rgba(255,0,255,0.4)]">
                                Background Story
                            </h3>

                            <div className="flex flex-col gap-6 text-base md:text-lg leading-relaxed font-light tracking-wide text-white/70 h-[500px] overflow-y-auto pr-6 custom-scrollbar">
                                <p>
                                    Astride grew up in a house where music was never just background noise, it was a lifeline. She started singing at eight years old, first by copying melodies she heard on the radio and TV, then by obsessively replaying songs until she could match every note. What began as a kid’s curiosity turned into a habit, then a <strong className="text-primary drop-shadow-[0_0_5px_rgba(249,168,38,0.4)] font-bold">calling</strong>.
                                </p>
                                <p>
                                    In her early teens, she found rock and metal and it felt like someone finally translated her thoughts into sound. The first bands that truly hooked her were <strong className="text-astrideCyan font-bold drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">Linkin Park</strong> and <strong className="text-astrideMagenta font-bold drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]">Evanescence</strong>. She loved how those songs could be heavy without losing melody, emotional without becoming fragile, and dramatic without feeling fake. That mix became the blueprint for her own voice and writing: <strong className="text-primary font-bold">intensity with clarity</strong>, punch with heart.
                                </p>
                                <p>
                                    By the time she was in her late teens, Astride was already performing wherever she could: school events, small stages, tiny venues where the speakers were too loud and the lights were barely working. She learned to command a room the hard way, by showing up, singing through nerves, and refusing to <strong className="text-astrideCyan/80 font-bold">shrink</strong>.
                                </p>
                                <p>
                                    Over time, she developed a signature sound: <strong className="text-primary font-bold drop-shadow-[0_0_5px_rgba(249,168,38,0.4)]">clean, bright vocals</strong> with a <strong className="text-astrideMagenta font-bold drop-shadow-[0_0_5px_rgba(255,0,255,0.4)]">subtle rasp at the tail of phrases</strong>, like the emotion keeps burning after the note ends. She can go soft and intimate, then flip into a powerful, stadium-ready chorus without losing control. Her music lives somewhere between <strong className="text-astrideCyan font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]">rock/metal/new metal</strong> and <strong className="text-astrideMagenta font-bold drop-shadow-[0_0_5px_rgba(255,0,255,0.4)]">pop rock</strong>, with just enough pop influence to make the hooks stick in your head for days. Astride isn’t trying to “choose a lane”. She’s trying to make songs that feel like <strong className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] font-bold border-b border-astrideCyan">adrenaline and confession</strong> at the same time.
                                </p>
                                <p>
                                    Now in her mid-20s (around <strong className="text-primary font-bold">25–27</strong>), she’s known for a rebellious, confident stage presence and lyrics that hit like a personal message you weren’t supposed to read. Her aesthetic blends <strong className="text-astrideMagenta font-bold">grunge attitude</strong> with a sleek, <strong className="text-astrideCyan font-bold">modern edge</strong>, but the core of her identity is simple: she’s a vocalist who turns pressure into power and emotion into something you can <strong className="text-primary font-bold drop-shadow-[0_0_5px_rgba(249,168,38,0.4)] uppercase tracking-widest text-sm ml-1">scream along to</strong>.
                                </p>
                            </div>
                        </div>

                    </CardBody>
                </Card>
            </div>
        </section>
    );
};
