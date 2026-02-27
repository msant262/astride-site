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
    useDisclosure
} from '@heroui/react';

export const LyricsPage = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    usePageSEO({
        title: 'Lyrics',
        description: 'Read the lyrics of "In The Dark" by Astride — the debut single from the 2026 album.',
        url: '/lyrics'
    });

    const lyricsStr = `When the world goes quiet and the lights fade out,
You’re the steady signal I can’t live without.
In the noise of my head, you don’t disappear,
You turn every doubt into something I can hear.

I was running on empty, chasing after scars,
Then you pulled me closer like gravity and stars.
You don’t fix me like magic, you stay like a vow,
And somehow I remember who I am right now.

If I fall apart, you don’t look away,
You hold the pieces like they’re made to stay.

You’re the gold in the dark,
Higher than the stars,
Burning through my heart.

When everything falls apart —
You’re my light.

Oh-oh-oh,
You’re the gold in the dark.

You make ordinary feel like a victory,
Turn small little moments into history.
Even on the days I’m hard to love,
You love me like it’s effortless, like it’s enough.

I don’t need a crowd, I don’t need applause,
I just need your hand when the night withdraws.
You’re not just a feeling, you’re the place I go,
My home in the chaos, the fire under snow.

If I lose my way, you don’t let me drown,
You pull me back up, you turn me around.

You’re the gold in the dark,
Higher than the stars,
Burning through my heart.

When everything falls apart —
You’re my light.

Oh-oh-oh,
You’re the gold in the dark.

No perfect love, no perfect days,
Just two hearts learning different ways.
And I’d choose you again, through the weight of it all,
Through every rise, through every fall.

You’re the gold in the dark,
My breath, my horizon,
My reason to fight,
My quiet uprising.

When everything fades,
You’re still in my heart.
You don’t just shine —
You’re my light.
You’re the gold in the dark.`;

    const lyricsLines = lyricsStr.split('\n');

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
                                <TableRow key="1">
                                    <TableCell>
                                        <div className="flex flex-col text-left">
                                            <span className="font-bold text-2xl text-white group-hover:text-astrideCyan transition-colors tracking-wide">In The Dark</span>
                                            <span className="text-xs text-white/40 uppercase tracking-[0.3em] mt-2 font-bold">Single • 2026</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex justify-end">
                                            <Button
                                                variant="light"
                                                disableRipple
                                                className="text-white/50 hover:text-astrideMagenta transition-colors uppercase tracking-[0.3em] text-xs font-black px-0 bg-transparent hover:bg-transparent"
                                                onPress={onOpen}
                                            >
                                                Read Lyrics
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    {/* HeroUI Modal for Lyrics */}
                    <Modal
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
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
                                        <h2 className="text-3xl font-black uppercase tracking-wider text-primary">In The Dark</h2>
                                        <p className="text-xs uppercase tracking-widest text-white/40">Written by Astride</p>
                                    </ModalHeader>
                                    <ModalBody>
                                        <div className="text-center text-lg md:text-xl leading-relaxed text-white/80 font-light tracking-wide space-y-2">
                                            {lyricsLines.map((line, index) => (
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
