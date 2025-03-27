// import { useEffect, useState } from 'react';
// import Confetti from 'react-confetti';
// import { PartyPopper } from 'lucide-react';

// const BinaryConfetti = () => {
//     const [showConfetti, setShowConfetti] = useState(true);
//     const [isButtonVisible, setIsButtonVisible] = useState(true);

//     // Track scroll position and toggle button visibility
//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollPosition = window.scrollY; // Current scroll position in pixels
//             const viewportHeight = window.innerHeight; // Viewport height in pixels
//             const threshold = viewportHeight * 1; // 150vh (1.5 times viewport height)

//             // Show button if scroll position is within 150vh, hide otherwise
//             setIsButtonVisible(scrollPosition <= threshold);
//         };

//         // Add scroll listener
//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); // Check initial position

//         // Cleanup listener on unmount
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         if (showConfetti) {
//             const timer = setTimeout(() => {
//                 setShowConfetti(false);
//             }, 10000);
//             return () => clearTimeout(timer);
//         }
//     }, [showConfetti]);

//     return (
//         <>
//             {showConfetti && (
//                 <Confetti
//                     numberOfPieces={400}
//                     recycle={false}
//                     // colors={['#00FF00']}
//                     colors={['#00FF00', '#006400', '#008000', '#228B22', '#2E8B57']}
//                     drawShape={(ctx) => {
//                         const text = Math.random() > 0.5 ? '0' : '1';

//                         // Random green shades (HSL format)
//                         const hue = 120; // Green hue
//                         const saturation = 40 + Math.random() * 60;
//                         const lightness = 40 + Math.random() * 20;
//                         ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

//                         // Set font and text properties
//                         /// Set font with random size between 16px and 24px
//                         const fontSize = 16 + Math.random() * 8; // Range: 16px to 24px
//                         ctx.font = `${fontSize}px monospace`;

//                         ctx.textAlign = 'center';
//                         ctx.textBaseline = 'middle';

//                         // Draw the binary character
//                         ctx.fillText(text, 0, 0);
//                     }}
//                     confettiSource={{
//                         x: 0,
//                         y: 0,
//                         w: window.innerWidth,
//                         h: 0
//                     }}
//                     initialVelocityY={10}
//                     initialVelocityX={Math.random() * 4 - 2} // Slight horizontal spread
//                     gravity={0.085}
//                     wind={0.005}
//                     opacity={0.9}
//                 />

//             )}
//             {/* Button with visibility controlled by scroll position */}
//             {isButtonVisible && (
//                 <button
//                     onClick={() => setShowConfetti(true)}
//                     disabled={showConfetti}
//                     aria-label="Start Confetti"
//                     className="fixed bottom-4 right-4 p-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
//                 >
//                     <PartyPopper className="w-5 h-5" />
//                 </button>
//             )}
//         </>
//     );
// };

// export default BinaryConfetti;

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { PartyPopper } from 'lucide-react';

const BinaryConfetti = () => {
    const [showConfetti, setShowConfetti] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

    // Trigger initial confetti after a delay on mount
    useEffect(() => {
        const initialDelay = setTimeout(() => {
            setShowConfetti(true); // Show confetti after delay
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }, 2000); // 2-second delay (adjustable)

        return () => clearTimeout(initialDelay); // Cleanup on unmount
    }, []); // Empty dependency array: runs once on mount

    // Throttle scroll handler
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const handleScroll = () => {
            if (!timeout) {
                timeout = setTimeout(() => {
                    const threshold = window.innerHeight * 0.1;
                    setIsButtonVisible(window.scrollY <= threshold);
                    timeout = null as unknown as NodeJS.Timeout;
                }, 100);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (showConfetti) {
            const timer = setTimeout(() => setShowConfetti(false), 10000);
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

    return (
        <>
            {showConfetti && (
                <Confetti
                    numberOfPieces={300}
                    recycle={false}
                    colors={['#00FF00']}
                    drawShape={(ctx) => {
                        // Precompute values
                        const text = Math.random() > 0.5 ? '0' : '1';
                        const hue = 120;
                        const saturation = 40 + Math.random() * 60;

                        ctx.fillStyle = `hsl(${hue},${saturation}%,50%)`;
                        ctx.font = '18px monospace';
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(text, 0, 0);
                    }}
                    confettiSource={{
                        x: 0,
                        y: 0,
                        w: windowDimensions.width,
                        h: 0
                    }}
                    initialVelocityY={10}
                    gravity={0.075}
                    wind={0.01}
                    opacity={0.8}
                    tweenDuration={5000}
                />
            )}

            {isButtonVisible && (
                <button
                    onClick={() => setShowConfetti(true)}
                    disabled={showConfetti}
                    aria-label="Start Confetti"
                    className="fixed bottom-4 right-4 p-2 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition-colors z-50"
                >
                    {/* flip this */}
                    <PartyPopper className="w-4 h-4" style={{ transform: 'rotateY(180deg)' }} />
                </button>
            )}
        </>
    );
};

export default BinaryConfetti;