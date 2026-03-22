import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { usePageSEO } from '../hooks/usePageSEO';
import { Footer } from '../components/layout/Footer';
import {
    Button,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@heroui/react';

interface Song {
    id: string;
    title: string;
    subtitle: string;
    lyrics: string;
}

const songs: Song[] = [
    {
        id: 'in-the-dark',
        title: 'In The Dark',
        subtitle: 'Single • 2026',
        lyrics: `When the world goes quiet and the lights fade out,
You're the steady signal I can't live without.
In the noise of my head, you don't disappear,
You turn every doubt into something I can hear.

I was running on empty, chasing after scars,
Then you pulled me closer like gravity and stars.
You don't fix me like magic, you stay like a vow,
And somehow I remember who I am right now.

If I fall apart, you don't look away,
You hold the pieces like they're made to stay.

You're the gold in the dark,
Higher than the stars,
Burning through my heart.

When everything falls apart —
You're my light.

Oh-oh-oh,
You're the gold in the dark.

You make ordinary feel like a victory,
Turn small little moments into history.
Even on the days I'm hard to love,
You love me like it's effortless, like it's enough.

I don't need a crowd, I don't need applause,
I just need your hand when the night withdraws.
You're not just a feeling, you're the place I go,
My home in the chaos, the fire under snow.

If I lose my way, you don't let me drown,
You pull me back up, you turn me around.

You're the gold in the dark,
Higher than the stars,
Burning through my heart.

When everything falls apart —
You're my light.

Oh-oh-oh,
You're the gold in the dark.

No perfect love, no perfect days,
Just two hearts learning different ways.
And I'd choose you again, through the weight of it all,
Through every rise, through every fall.

You're the gold in the dark,
My breath, my horizon,
My reason to fight,
My quiet uprising.

When everything fades,
You're still in my heart.
You don't just shine —
You're my light.
You're the gold in the dark.`,
    },
    {
        id: 'neon',
        title: 'Neon',
        subtitle: 'Single • 2026',
        lyrics: `Neon…
You feel like a signal in the dark…

When the city hushes and the streetlights bloom,
you walk in quiet like a midnight tune.
Eyes like thunder, lips like a secret I keep,
every step you take pulls me out of sleep.
I've been running on fumes, on ghosts, on noise,
building walls out of "maybe" and broken choices.
Then you lean in close, and the chaos slows,
like the world remembers what my heart knows.

Your shadow on my jacket, your laugh in my ear,
makes the whole damn skyline disappear.
They talk in corners, counting what we are,
but they can't measure fire from afar.

If I crack, you don't flinch, you don't fade,
you hold the mess like a promise made.
And I don't need saving, I just need truth,
and you feel like proof… you feel like proof.

Stay… right here…

NE-ON, you're the voltage in my veins,
when the city turns cold, you call my name.
Hit my heart like a siren in the rain,
I'm wired to your touch, I can't escape.
Say it once, say it twice, don't let go,
we're a pulse on the edge of the world below.
NEEEE-OOOOON…
burning on my skin… on my skin…

Oh-oh-oh… neon on my skin
Oh-oh-oh… turn it on, turn it on
Don't let me go…

I don't need a crown, I don't need a stage,
I just need your hands when the night turns page.
You turn small moments into something loud,
like a heartbeat singing over the crowd.
I've been hard to love, I've been hard to read,
but you speak my silence like you know what I need.
No magic fixes, no fairy-tale spark,
just you staying close when it's heavy and dark.

If I fall apart, you don't look away,
you stitch the fear with the words you say.
And I don't need perfect, I just need real,
and you feel like steel… you feel like steel.

NE-ON, you're the voltage in my veins,
when the city turns cold, you call my name.
Hit my heart like a siren in the rain,
I'm wired to your touch, I can't escape.
Say it once, say it twice, don't let go,
we're a pulse on the edge of the world below.
NEEEE-OOOOON…
burning on my skin… on my skin…

No perfect love… no perfect nights…
just two wild hearts learning how to fight…
for something true…
And I'd choose you again, through the static and the scars,
through every storm that tries to tear us apart.

NE-ON, you're the voltage in my veins,
when the city turns cold, you call my name.
Hit my heart like a siren in the rain,
I'm wired to your touch, I can't escape.
Say it once, say it twice, don't let go,
we're a pulse on the edge of the world below.
NEEEE-OOOOON…
burning on my skin… on my skin…

Neon vow…
stay… right here…`,
    },
    {
        id: 'hurricane',
        title: 'Hurricane',
        subtitle: 'Single • 2026',
        lyrics: `Gray skies... whatever.
Rain falling... it doesn't matter.
Just another day in the noise.

Looking out the window, colors fading out
People talking loud, but I don't hear a sound
Waiting for the sun? Nah, I'm over it
Sitting in the dark, yeah, I'm used to it

Tick-tock, but the clock feels slow
Something's waking up down below
Yeah, the wind is getting loud, getting heavy
Heartbeat jumping, yeah, I think I'm ready!

Let the storm wash it away! (Hey!)
Let the rain fall down today! (Hey!)
I'm dancing in the hurricane, breaking every chain
Got the lightning in my eyes, sunshine in my veins!
Wash it away! (Wash it!)
Wash it away! (Yeah!)
Watch me shine brighter than yesterday!

(Ah-ah-ah! Wash it away!)
(Ah-ah-ah! In the hurricane!)

No more gold and glitter, keep it on the shelf
I don't need your drama, I can save myself
Barefoot on the ground, jumping over scars
Traded all the gray for a million stars

Tick-tock, and the clock won't stop
Taking all the pain straight to the top!
Yeah, the wind is blowing loud, blowing heavy
Heartbeat jumping, yeah, you know I'm ready!

Let the storm wash it away! (Hey!)
Let the rain fall down today! (Hey!)
I'm dancing in the hurricane, breaking every chain
Got the lightning in my eyes, sunshine in my veins!
Wash it away! (Wash it!)
Wash it away! (Yeah!)
Watch me shine brighter than yesterday!

Yeah!
Thunder crashing, I ain't running back
Flipping the script, I'm on the attack
Every single tear that fell on the floor
Just watered the seed, now hear me roar!
(Drop the beat!)

Let it wash... away.

Let the storm wash it away! (Hey!)
Let the rain fall down today! (Hey!)
I'm dancing in the hurricane, breaking every chain
Got the lightning in my eyes, sunshine in my veins!

Wash it away, wash it away...
Brighter than yesterday.`,
    },
    {
        id: 'anti-hero',
        title: 'Anti-Hero',
        subtitle: 'Single • 2026',
        lyrics: `(Ah, ah!)
My favorite anti-hero...
Let's play!

The sun is shining but you love the dark
You're playing the villain but you stole my heart!
You say you're danger, you say you're bad
But I'm the wildest dream you ever had!
You try to run, you try to hide your face
But I can track you down in any place
You tell the world you have a heart of stone
But I'm the only one who makes you lose control!

You hide in the shadows, keeping it cool
But I'm out here breaking every single rule!
Come into the light, don't run away
We're the perfect chaos, what can I say?
(One, two, ready, jump!)

So what if the world is staring right now? (Let 'em!)
Let the people talk, we're taking a bow! (Yeah!)
My beautiful mess, my anti-hero
We're burning it up, counting down to zero!
If I take the stage and I own the night
It's 'cause I was born wild, ready to fight!
Sorry if my attitude is too much to take
But it's for you that my heart starts to break!
(Yeah, my anti-hero!)

(Ah-ah!) My anti-hero!
(Ah-ah!) Down to zero!
(Let's go, let's go!)

Call me at midnight, acting so tough
But I know your secrets, I call your bluff!
A beautiful poison, a dangerous game
But you're a moth flying straight to my flame!
So lay down your cards, give me the crown
We're the craziest story in the whole wide town!

You hide in the shadows, keeping it cool
But I'm out here breaking every single rule!
Come into the light, don't run away
We're the perfect chaos, what can I say?
(One, two, three, hit it!)

So what if the world is staring right now? (Let 'em!)
Let the people talk, we're taking a bow! (Yeah!)
My beautiful mess, my anti-hero
We're burning it up, counting down to zero!
If I take the stage and I own the night
It's 'cause I was born wild, ready to fight!
Sorry if my attitude is too much to take
But it's for you that my heart starts to break!

Hold up, drop the bass!
Anti-hero hiding in a crowded place!
Think you're the villain, think you run the show?
But I'm pulling the strings and now you know!
Yeah, we're toxic, yeah, we're wild
Living like a rebel but I smile like a child!
Stop running, stop hiding, just give me your hand
We're the baddest couple in the wonderland!
(Brrah! Let's dance!)

(Move it, move it!)
...
(Anti-hero!)

So what if the world is staring right now? (Yeah!)
My beautiful mess, my anti-hero
We're burning it up, counting down to zero!
If I take the stage and I own the night
It's 'cause I was born wild, ready to fight!
Sorry if my attitude is too much to take
But it's for you that my heart starts to break!

Got you now...
My anti-hero.`,
    },
];

export const LyricsPage = () => {
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);

    usePageSEO({
        title: 'Lyrics',
        description: 'Read the lyrics of Astride\'s singles — In The Dark, Neon, Hurricane, Anti-Hero.',
        url: '/lyrics'
    });

    const handleOpen = (song: Song) => setSelectedSong(song);
    const handleClose = () => setSelectedSong(null);

    return (
        <div className="flex flex-col min-h-screen bg-astrideBlack text-white">
            <Navbar />

            <main className="flex-grow pt-40 pb-40 px-6 relative overflow-hidden flex flex-col items-center">
                {/* Background Details */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-astrideMagenta/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-4xl w-full z-10 text-center flex flex-col items-center relative py-12">
                    <p className="text-sm font-bold text-astrideCyan tracking-[0.4em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                        Latest Release
                    </p>
                    <h1 className="font-script text-8xl md:text-[140px] text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-[#F9A826] to-[#B8860B] drop-shadow-[0_10px_20px_rgba(249,168,38,0.6)] mb-24 pb-4">
                        Astride
                    </h1>

                    {/* Clean Table Format using HeroUI */}
                    <div className="w-full max-w-3xl border-t border-b border-white/5">
                        <Table
                            aria-label="Songs List"
                            removeWrapper
                            hideHeader
                            className="bg-transparent"
                            classNames={{
                                th: "hidden",
                                td: "py-6 px-4 md:px-8 text-xl border-b border-white/5 group-last:border-none",
                                tr: "hover:bg-white/5 transition-colors group cursor-default"
                            }}
                        >
                            <TableHeader>
                                <TableColumn>SONG</TableColumn>
                                <TableColumn align="end">ACTION</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {songs.map((song) => (
                                    <TableRow key={song.id}>
                                        <TableCell>
                                            <div className="flex flex-col text-left">
                                                <span className="font-bold text-2xl text-white group-hover:text-astrideCyan transition-colors tracking-wide">{song.title}</span>
                                                <span className="text-xs text-white/40 uppercase tracking-[0.3em] mt-2 font-bold">{song.subtitle}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex justify-end">
                                                <Button
                                                    variant="light"
                                                    disableRipple
                                                    className="text-white/50 hover:text-astrideMagenta transition-colors uppercase tracking-[0.3em] text-xs font-black px-0 bg-transparent hover:bg-transparent"
                                                    onPress={() => handleOpen(song)}
                                                >
                                                    Read Lyrics
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    {/* HeroUI Modal for Lyrics */}
                    <Modal
                        isOpen={selectedSong !== null}
                        onOpenChange={(open) => { if (!open) handleClose(); }}
                        size="2xl"
                        placement="center"
                        hideCloseButton={true}
                        classNames={{
                            base: "bg-black/90 backdrop-blur-xl border border-white/10 text-white max-h-[90vh]",
                            header: "border-b border-white/5 flex flex-col gap-1 py-6",
                            body: "py-6 custom-scrollbar overflow-y-auto",
                            footer: "border-t border-white/5",
                            closeButton: "hover:bg-white/10 active:bg-white/20"
                        }}
                        scrollBehavior="inside"
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 text-center">
                                        <h2 className="text-3xl font-black uppercase tracking-wider text-primary">{selectedSong?.title}</h2>
                                        <p className="text-xs uppercase tracking-widest text-white/40">Written by Astride</p>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div className="text-center text-lg md:text-xl leading-relaxed text-white/80 font-light tracking-wide space-y-2">
                                            {selectedSong?.lyrics.split('\n').map((line, index) => (
                                                <p key={index} className={line === '' ? 'h-6' : 'hover:text-primary transition-colors cursor-default'}>
                                                    {line === '' ? null : line}
                                                </p>
                                            ))}
                                        </div>
                                    </ModalBody>
                                    <ModalFooter className="flex justify-center">
                                        <Button
                                            variant="light"
                                            onPress={onClose}
                                            className="text-astrideMagenta/70 hover:text-astrideMagenta uppercase tracking-[0.2em] text-xs font-bold transition-colors"
                                        >
                                            Close Lyrics
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>

                </div>
            </main>

            <Footer />
        </div>
    );
};
