import img1 from '../../img/ADD_1.jpg';
import img2 from '../../img/ADD_2.jpg';
import img3 from '../../img/ADD_3.jpg';
import img4 from '../../img/ADD_4.jpg';
import img5 from '../../img/ADD_5.jpg';
import img6 from '../../img/ADD_9.jpg';
import img7 from '../../img/BRIDGE.jpg';
import img8 from '../../img/CANON.jpg';
import { Card, CardBody, Modal, ModalContent, useDisclosure } from "@heroui/react";
import { useState } from 'react';

export const GallerySection = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const photos = [
        { id: 1, src: img1, colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-2" },
        { id: 2, src: img2, colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: 3, src: img3, colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: 4, src: img8, colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
        { id: 5, src: img4, colSpan: "col-span-1", rowSpan: "row-span-2" },
        { id: 6, src: img5, colSpan: "col-span-1", rowSpan: "row-span-1" },
        { id: 7, src: img6, colSpan: "col-span-1 md:col-span-2", rowSpan: "row-span-1" },
        { id: 8, src: img7, colSpan: "col-span-1", rowSpan: "row-span-1" },
    ];

    return (
        <section id="gallery" className="py-32 bg-background relative overflow-hidden flex flex-col items-center px-6">
            {/* Glows for Cyan/Magenta representation */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-astrideCyan/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-astrideMagenta/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl w-full z-10">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-astrideCyan tracking-[0.3em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">Visuals</p>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                        Astride Gallery
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
                    {photos.map((photo) => (
                        <Card
                            key={photo.id}
                            className={`border-none ring-1 ring-white/10 overflow-hidden bg-black group hover:ring-astrideMagenta/50 transition-all ${photo.colSpan} ${photo.rowSpan}`}
                            isPressable
                            onPress={() => {
                                setSelectedImg(photo.src);
                                onOpen();
                            }}
                        >
                            <CardBody className="p-0 overflow-hidden w-full h-full relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-astrideMagenta/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img
                                    src={photo.src}
                                    alt={`Astride Gallery ${photo.id}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out z-0"
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <Modal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    size="5xl"
                    backdrop="blur"
                    placement="center"
                    classNames={{
                        base: "bg-transparent border-none shadow-none m-0 shadow-none",
                        wrapper: "flex justify-center items-center overflow-hidden",
                        closeButton: "hover:bg-white/5 active:bg-white/10 text-white z-50 text-2xl right-4 top-4 bg-black/50 p-6 rounded-full",
                    }}
                >
                    <ModalContent className="flex items-center justify-center p-0 m-0 w-auto">
                        {(onClose) => (
                            <div className="flex justify-center items-center w-full h-full relative cursor-auto" onClick={onClose}>
                                {selectedImg && (
                                    <img
                                        src={selectedImg}
                                        className="max-h-[85vh] max-w-[95vw] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]"
                                        alt="Astride Full View"
                                    />
                                )}
                            </div>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </section>
    );
};
