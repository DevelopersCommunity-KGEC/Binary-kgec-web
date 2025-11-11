"use client";

import React from "react";
import PageSection from "@/hooks/PageSection";
import { BentoGrid } from "@/components/ui/bento-grid";
import BinaryText from "../Animations/BinaryText";

const Gallery = () => {
    // Event photos from Binary 2024 - divided into 4 parts
    const allPhotos = [
        "/images/event_images_24/IMG_0005.webp",
        "/images/event_images_24/IMG_0007.webp",
        "/images/event_images_24/IMG_0011.webp",
        "/images/event_images_24/IMG_0018-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0023.webp",
        "/images/event_images_24/IMG_0026.webp",
        "/images/event_images_24/IMG_0027.webp",
        "/images/event_images_24/IMG_0038-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0041.webp",
        "/images/event_images_24/IMG_0051.webp",
        "/images/event_images_24/IMG_0052.webp",
        "/images/event_images_24/IMG_0058-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0070.webp",
        "/images/event_images_24/IMG_0075-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0076-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0084-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0092-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0109.webp",
        "/images/event_images_24/IMG_0120-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0123.webp",
        "/images/event_images_24/IMG_0125-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0141.webp",
        "/images/event_images_24/IMG_0145-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0147.webp",
        "/images/event_images_24/IMG_0148-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0150-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0154.webp",
        "/images/event_images_24/IMG_0156-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0159-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0161.webp",
        "/images/event_images_24/IMG_0164-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0168.webp",
        "/images/event_images_24/IMG_0174.webp",
        "/images/event_images_24/IMG_0175.webp",
        "/images/event_images_24/IMG_0176.webp",
        "/images/event_images_24/IMG_0178-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0179-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0180.webp",
        "/images/event_images_24/IMG_0189-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0190.webp",
        "/images/event_images_24/IMG_0191.webp",
        "/images/event_images_24/IMG_0192.webp",
        "/images/event_images_24/IMG_0194.webp",
        "/images/event_images_24/IMG_0195.webp",
        "/images/event_images_24/IMG_0198.webp",
        "/images/event_images_24/IMG_0201-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0208.webp",
        "/images/event_images_24/IMG_0214.webp",
        "/images/event_images_24/IMG_0218.webp",
        "/images/event_images_24/IMG_0226.webp",
        "/images/event_images_24/IMG_0235.webp",
        "/images/event_images_24/IMG_0237-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0244-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0248-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0250-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0256.webp",
        "/images/event_images_24/IMG_0257.webp",
        "/images/event_images_24/IMG_0260-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0263-Enhanced-NR.webp",
        "/images/event_images_24/IMG_0267-Enhanced-NR.webp",
        "/images/event_images_24/IMG_8717.webp",
        "/images/event_images_24/IMG_8739.webp",
        "/images/event_images_24/IMG_8745.webp",
        "/images/event_images_24/IMG_8747.webp",
        "/images/event_images_24/IMG_8768.webp",
        "/images/event_images_24/IMG_8787.webp",
        "/images/event_images_24/IMG_8825.webp",
        "/images/event_images_24/IMG_8859.webp",
        "/images/event_images_24/IMG_8864.webp",
        "/images/event_images_24/IMG_8881.webp",
        "/images/event_images_24/IMG_8886.webp",
        "/images/event_images_24/IMG_8888.webp",
        "/images/event_images_24/IMG_8903.webp",
        "/images/event_images_24/IMG_8914.webp",
        "/images/event_images_24/IMG_8951.webp",
        "/images/event_images_24/IMG_8959.webp",
        "/images/event_images_24/IMG_8963.webp",
        "/images/event_images_24/IMG_9756.webp",
        "/images/event_images_24/IMG_9823-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9836-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9854.webp",
        "/images/event_images_24/IMG_9862-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9863.webp",
        "/images/event_images_24/IMG_9868-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9872-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9877-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9888.webp",
        "/images/event_images_24/IMG_9905.webp",
        "/images/event_images_24/IMG_9907-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9918.webp",
        "/images/event_images_24/IMG_9920-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9921.webp",
        "/images/event_images_24/IMG_9924.webp",
        "/images/event_images_24/IMG_9932-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9942-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9947-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9963-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9965-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9970-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9974-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9976.webp",
        "/images/event_images_24/IMG_9982-Enhanced-NR.webp",
        "/images/event_images_24/IMG_9989-Enhanced-NR.webp",
    ];

    // Divide photos into 4 parts for cycling animation - memoize to prevent recreating
    const photoParts = React.useMemo(() => {
        const totalPhotos = allPhotos.length;
        const partSize = Math.ceil(totalPhotos / 5);    // Calculate size for 5 parts
        return [
            allPhotos.slice(0, partSize),                    // Part 1
            allPhotos.slice(partSize, partSize * 2),         // Part 2
            allPhotos.slice(partSize * 2, partSize * 3),     // Part 3
            allPhotos.slice(partSize * 3, partSize * 4),     // Part 4
            allPhotos.slice(partSize * 4),     // Part 5
        ];
    }, []);

    const [items, setItems] = React.useState<any[]>([]);

    // Load images with aspect ratio detection
    const loadImagesWithDimensions = React.useCallback(async (photoList: string[]) => {
        const imageItems = await Promise.all(
            photoList.map(
                (src, i) =>
                    new Promise<any>((resolve) => {
                        const img = new Image();
                        img.onload = () => {
                            const aspectRatio = img.width / img.height;
                            console.log(aspectRatio);
                            let colSpan, rowSpan;

                            // Determine layout based on aspect ratio
                            if (aspectRatio > 1.5) {
                                // Wide landscape
                                colSpan = { base: 2, md: 4, lg: 6 };
                                rowSpan = { base: 2, md: 2, lg: 2 };
                            } else if (aspectRatio > 1.1) {
                                // Medium landscape
                                colSpan = { base: 2, md: 3, lg: 4 };
                                rowSpan = { base: 2, md: 2, lg: 2 };
                            } else if (aspectRatio < 0.7) {
                                // Tall portrait
                                colSpan = { base: 1, md: 2, lg: 3 };
                                rowSpan = { base: 3, md: 4, lg: 4 };
                            } else if (aspectRatio < 0.9) {
                                // Medium portrait
                                colSpan = { base: 1, md: 2, lg: 3 };
                                rowSpan = { base: 2, md: 3, lg: 3 };
                            } else {
                                // Square-ish
                                colSpan = { base: 1, md: 2, lg: 3 };
                                rowSpan = { base: 2, md: 2, lg: 2 };
                            }

                            resolve({
                                id: i,
                                imageSrc: src,
                                imageAlt: "event photo",
                                colSpan,
                                rowSpan,
                                variant: "media" as const,
                            });
                        };
                        img.onerror = () => {
                            // Fallback for failed images
                            resolve({
                                id: i,
                                imageSrc: src,
                                imageAlt: "event photo",
                                colSpan: { base: 1, md: 2, lg: 3 },
                                rowSpan: { base: 1, md: 1, lg: 2 },
                                variant: "media" as const,
                            });
                        };
                        img.src = src;
                    })
            )
        );
        return imageItems;
    },
        []
    );

    // Initial load of first part
    React.useEffect(() => {
        const initGallery = async () => {
            const initialItems = await loadImagesWithDimensions(photoParts[0]);
            setItems(initialItems);
        };
        initGallery();
    }, [loadImagesWithDimensions, photoParts]);

    // Cycle through parts with staggered delays
    React.useEffect(() => {
        if (items.length === 0) return;

        const timers: NodeJS.Timeout[] = [];
        let globalPartIndex = 1; // Track which part we're on globally (start from part 2)

        // Function to update multiple items at once (all items with same position mod 6)
        const updateItemsAtPosition = (position: number) => {
            setItems((prevItems) => {
                const newItems = [...prevItems];
                const currentPart = photoParts[globalPartIndex];

                // Update all items where index % 6 === position
                prevItems.forEach((_, itemIndex) => {
                    if (itemIndex % 6 === position) {
                        const photoIndex = itemIndex % currentPart.length;
                        const newPhoto = currentPart[photoIndex];

                        if (newPhoto && newItems[itemIndex]) {
                            newItems[itemIndex] = {
                                ...newItems[itemIndex],
                                imageSrc: newPhoto,
                                id: `${itemIndex}-${Date.now()}-${globalPartIndex}`,
                            };
                        }
                    }
                });

                return newItems;
            });
        };

        // Master timer that cycles through positions 0-5
        let currentPosition = 0;
        let cycleCount = 0;

        const masterTimer = setInterval(() => {
            // Update all images at current position (0, 6, 12, 18... or 1, 7, 13, 19... etc.)
            updateItemsAtPosition(currentPosition);

            // Move to next position
            currentPosition = (currentPosition + 1) % 6;

            // After completing all 6 positions, move to next part
            if (currentPosition === 0) {
                cycleCount++;
                globalPartIndex = (globalPartIndex + 1) % 4;
            }
        }, 2000);

        timers.push(masterTimer);

        // Cleanup all timers
        return () => {
            timers.forEach((timer) => {
                clearTimeout(timer);
                clearInterval(timer);
            });
        };
    }, [items.length, photoParts]);

    return (
        <PageSection id="gallery" className="py-6 md:py-10">
            {/* <div id="gallery" className="flex flex-col font-pixelate text-white mt-28"> */}
            <div className="mb-1">
                <BinaryText
                    className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]"
                    reveal
                >
                    <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
                        <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
                            <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                                05.
                            </span>
                            <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                                Gallery
                            </span>

                            <div className="item-center flex flex-col justify-center">
                                <div className="right-full ml-4 mt-[10px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                            </div>
                        </h2>
                    </div>
                    <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
                        <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
                            <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                                05.
                            </span>
                            <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                                Gallery
                            </span>

                            <div className="item-center flex flex-col justify-center">
                                <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                            </div>
                        </h2>
                    </div>
                </BinaryText>
            </div>
            <div className="flex w-full justify-center items-center">
                {items.length > 0 ? (
                    <BentoGrid items={items} className="w-[calc(80vw)] md:w-[calc(60vw)]" />
                ) : (
                    <div className="flex min-h-[300px] items-center justify-center text-muted-foreground">
                        Loading gallery...
                    </div>
                )}
            </div>
            {/* </div> */}
        </PageSection>
    );
};

export default Gallery;