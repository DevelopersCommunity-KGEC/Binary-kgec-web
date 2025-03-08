// import React, { useState, useRef } from "react";
// import { FaUser, FaDownload, FaFileImage } from "react-icons/fa";

// const BadgeBuilder: React.FC = () => {
//     const [name, setName] = useState("");
//     const [image, setImage] = useState<string | null>(null);
//     const badgeRef = useRef<HTMLDivElement>(null);

//     const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const file = event.target.files?.[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onloadend = () => setImage(reader.result as string);
//             reader.readAsDataURL(file);
//         }
//     };

//     const downloadBadge = async () => {
//         if (badgeRef.current) {
//             // Dynamically import html2canvas to avoid SSR issues
//             const html2canvas = (await import('html2canvas')).default;
//             try {
//                 const canvas = await html2canvas(badgeRef.current);
//                 const link = document.createElement("a");
//                 link.href = canvas.toDataURL("image/png");
//                 link.download = `binary_badge_${name.replace(/\s+/g, '_').toLowerCase() || 'hacker'}.png`;
//                 link.click();
//             } catch (error) {
//                 console.error("Error generating badge:", error);
//                 alert("Failed to generate badge. Please try again.");
//             }
//         }
//     };

//     return (
//         <div className="py-16 px-4 sm:px-6 lg:px-8min-h-screen relative overflow-hidden font-pixelate">

//             <div className="max-w-6xl mx-auto relative z-10">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <div className="flex justify-center items-center mb-4">
//                         <span className="text-white text-5xl mr-1">{'{'}</span>
//                         <h1 className="text-4xl font-bold text-green-500">
//                             Binary Badge Generator
//                         </h1>
//                         <span className="text-white text-5xl ml-1">{'}'}</span>
//                     </div>
//                     <p className="text-green-400 max-w-2xl mx-auto text-sm">
//                         // Create your personalized event badge for Binary 2025.
//                         <br />
//                         // Upload your photo, add your name, and download to share.
//                     </p>
//                 </div>

//                 {/* Main Content */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                     {/* Badge Preview */}
//                     <div className="flex justify-center">
//                         <div
//                             ref={badgeRef}
//                             className="w-80 h-96 rounded-md shadow-lg bg-black shadow-green-500/20 overflow-hidden border border-green-500/50 relative"
//                         >

//                             {/* Badge Header with Logo */}
//                             <div className="absolute top-0 left-0 w-full p-3 border-b border-green-500/50 flex justify-between items-center">
//                                 <div className=" text-green-500 tracking-wider text-xs">BINARY 2025</div>
//                                 <div className="bg-green-500/20 px-2 py-1 text-xs rounded-sm text-green-400 ">KGEC</div>
//                             </div>

//                             {/* Badge Body */}
//                             <div className="flex flex-col items-center justify-center h-full pt-12 pb-4 px-4">
//                                 {/* Photo */}
//                                 <div className="mb-6 relative">
//                                     {image ? (
//                                         <div className="p-1 border border-green-500 rounded-md relative">
//                                             <img
//                                                 src={image}
//                                                 alt={`${name || "Hacker"}'s badge photo`}
//                                                 className="w-36 h-36 object-cover"
//                                             />
//                                             <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-green-500"></div>
//                                             <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-green-500"></div>
//                                             <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-green-500"></div>
//                                             <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-green-500"></div>
//                                         </div>
//                                     ) : (
//                                         <div className="w-36 h-36 flex items-center justify-center bg-black border border-green-500/50 text-green-500 p-1">
//                                             <FaUser size={48} />
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Name */}
//                                 <div className="mt-2 text-center w-full">
//                                     <h2 className="text-2xl  font-bold text-green-500 mb-1">
//                                         {name || "HACKER_NAME"}
//                                     </h2>
//                                     <div className="text-xs text-green-400  border-t border-b border-green-500/30 py-1 px-2 inline-block">
//                                         PARTICIPANT
//                                     </div>
//                                 </div>

//                                 {/* QR Code placeholder */}
//                                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
//                                     <div className="text-[10px] text-green-500 ">#BinaryKGEC2025</div>
//                                 </div>

//                                 {/* Design elements */}
//                                 <div className="absolute top-16 right-6 text-xs text-green-500/40">
//                                     {'{'}
//                                     <span className="text-green-500/20">01</span>
//                                     {'}'}
//                                 </div>
//                                 <div className="absolute bottom-6 left-6 text-xs text-green-500/40">
//                                     {'{'}
//                                     <span className="text-green-500/20">01</span>
//                                     {'}'}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Badge Creation Form */}
//                     <div className="bg-black/70 p-8 rounded-md border border-green-500/30 shadow-lg shadow-green-500/10">
//                         <h2 className="text-2xl  font-bold mb-6 text-green-500 flex items-center">
//                             <span className="mr-2">&gt;</span> Customize Your Badge
//                         </h2>

//                         <div className="space-y-6">
//                             <div>
//                                 <label htmlFor="name" className="block text-sm  text-green-400 mb-2">
//                                     // Your Name
//                                 </label>
//                                 <input
//                                     id="name"
//                                     type="text"
//                                     placeholder="Enter your name"
//                                     value={name}
//                                     onChange={(e) => setName(e.target.value)}
//                                     className="w-full p-3 rounded-sm bg-black text-green-500 border border-green-500/50 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition "
//                                     maxLength={25}
//                                     aria-label="Your name for the badge"
//                                 />
//                             </div>

//                             <div>
//                                 <label className="block text-sm  text-green-400 mb-2">
//                                     // Your Photo
//                                 </label>
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={handleImageUpload}
//                                     className="hidden"
//                                     id="file-upload"
//                                     aria-label="Upload your photo"
//                                 />
//                                 <label
//                                     htmlFor="file-upload"
//                                     className="cursor-pointer flex items-center justify-center gap-2 w-full p-3 bg-black rounded-sm text-green-500 border border-green-500/50 hover:bg-green-900/20 transition "
//                                 >
//                                     <FaFileImage />
//                                     {image ? "Update_photo" : "Upload_photo"}
//                                 </label>
//                                 {image && (
//                                     <button
//                                         onClick={() => setImage(null)}
//                                         className="mt-2 text-green-500 text-xs hover:text-green-600"
//                                     >
//                                         delete_photo
//                                     </button>
//                                 )}
//                             </div>

//                             <button
//                                 onClick={downloadBadge}
//                                 disabled={!name.trim()}
//                                 className="w-full flex items-center justify-center gap-2 p-3 bg-green-500 rounded-sm text-black  font-bold hover:bg-green-400 transition shadow-lg shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 aria-label="Download your badge"
//                             >
//                                 <FaDownload />
//                                 DOWNLOAD_BADGE
//                             </button>

//                             <p className="text-xs text-green-500/70 text-center mt-4 ">
//                                 // Share with #BinaryKGEC2025
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* CSS for animation */}
//             <style jsx>{`
//                 @keyframes scrollBinary {
//                     from { transform: translateY(-100%); }
//                     to { transform: translateY(100vh); }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default BadgeBuilder;





import React, { useState, useRef } from "react";
import { FaUser, FaDownload, FaFileImage, FaCode, FaTerminal } from "react-icons/fa";
import html2canvas from "html2canvas";

const BadgeBuilder: React.FC = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState<string | null>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const downloadBadge = async () => {
        if (badgeRef.current) {
            // Dynamically import html2canvas to avoid SSR issues
            // const html2canvas = (await import('html2canvas')).default;
            try {
                // Select the scan line div and hide it 
                const scanLine = badgeRef.current.querySelector(".animate-pulse");
                if (scanLine) (scanLine as HTMLElement).style.display = "none";

                const canvas = await html2canvas(badgeRef.current, {
                    scale: window.devicePixelRatio * 2, // Increase resolution
                    useCORS: true, // Ensure images load correctly
                    backgroundColor: null, // Preserve transparent background if needed
                });

                // Restore the scan line visibility
                if (scanLine) (scanLine as HTMLElement).style.display = "block";

                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png", 1.0);
                link.download = `binary_badge_${name.replace(/\s+/g, '_').toLowerCase() || 'hacker'}.png`;
                link.click();
            } catch (error) {
                console.error("Error generating badge:", error);
                alert("Failed to generate badge. Please try again.");
            }
        }
    };

    return (
        <div className="mt-20 mb-12 px-4 sm:px-6 lg:px-8 min-h-screen relative overflow-hidden font-pixelate bg-black">
            {/* Animated binary background */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="text-green-500 text-opacity-20 text-sm absolute whitespace-nowrap"
                        style={{
                            left: `${i * 10}%`,
                            animation: `scrollBinary ${5 + i * 2}s linear infinite`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    >
                        {Array.from({ length: 50 }).map((_, j) => (
                            <span key={j}>{Math.round(Math.random())}</span>
                        ))}
                    </div>
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex justify-center items-center mb-4">
                        <span className="text-white text-5xl mr-1">{'{'}</span>
                        <h1 className="text-4xl font-bold text-green-500 tracking-widest">
                            Get Your Badge
                        </h1>
                        <span className="text-white text-5xl ml-1">{'}'}</span>
                    </div>
                    <p className="text-green-400 max-w-2xl mx-auto text-sm">
                        <FaTerminal className="inline-block mr-2" />
                        // Create your personalized hacker's badge for Binary 2025.
                        <br />
                        <FaCode className="inline-block mr-2" />
                        // Upload your photo, add your name, and download to share.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Badge Preview */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-2 bg-green-500 opacity-30 blur-lg rounded-lg"></div>

                            <div
                                ref={badgeRef}
                                className="w-80 h-96 rounded-md shadow-lg bg-black shadow-green-500/20 overflow-hidden border border-green-500/50 relative"
                            >
                                {/* Badge Header with Logo - Fixed positioning */}
                                <div className="h-12 border-b border-green-500/50 flex justify-between items-center px-3">
                                    <div className="text-green-500 tracking-widest text-xs font-bold">BINARY 2025</div>
                                    <div className="text-xs text-green-400 ">KGEC</div>
                                </div>

                                {/* Matrix code effect in background */}
                                <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden text-green-500 text-xs">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div key={i} className="absolute" style={{ left: `${i * 10}%`, top: `${(i * 20) % 100}%` }}>
                                            {Array.from({ length: 10 }).map((_, j) => (
                                                <div key={j}>{Math.round(Math.random())}</div>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Badge Body */}
                                <div className="flex relative flex-col items-center justify-center h-80 pt-2 pb-4 px-4">
                                    {/* Photo */}
                                    <div className="mb-6 relative">
                                        {image ? (
                                            <div className="p-1 border border-green-500 rounded-md relative">
                                                <img
                                                    src={image}
                                                    alt={`${name || "Hacker"}'s badge photo`}
                                                    className="w-36 h-36 object-cover"
                                                />
                                                {/* Corner brackets */}
                                                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-green-500"></div>
                                                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-green-500"></div>
                                                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-green-500"></div>
                                                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-green-500"></div>
                                            </div>
                                        ) : (
                                            <div className="w-36 h-36 flex items-center justify-center bg-black border border-green-500/50 text-green-500 p-1 relative">
                                                <FaUser size={48} />
                                                {/* Corner brackets */}
                                                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-green-500"></div>
                                                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-green-500"></div>
                                                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-green-500"></div>
                                                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-green-500"></div>
                                            </div>
                                        )}

                                        {/* Scan line effect */}
                                        <div className="absolute left-0 right-0 h-1 bg-green-500/20 animate-pulse"
                                            style={{ top: '50%', animation: 'scanLine 2s linear infinite' }}></div>

                                        {/* <01> tag */}
                                    </div>
                                    <div className="absolute top-2 right-2 text-xs text-green-500/60">
                                        {'<01>'}
                                    </div>

                                    {/* Name */}
                                    <div className="mt-1 text-center w-full flex flex-col justify-center items-center">
                                        <h2 className="text-xl font-bold text-green-500 mb-1 tracking-wider relative inline-block whitespace-nowrap">
                                            {name || "HACKER_NAME"}
                                            <div className="absolute -bottom-1 left-0 right-0 h-px "></div>
                                        </h2>
                                        <div className="text-sm font-bold text-green-400 py-1 px-4 inline-block mt-2 whitespace-nowrap">
                                            HACKER
                                        </div>
                                    </div>


                                    {/* Bottom tag */}
                                    <div className="absolute bottom-0 left-3 text-xs text-green-500/60">
                                        {'<01>'}
                                    </div>

                                    {/* QR Code placeholder */}
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 font-mono w-full flex justify-center">
                                        <div className="text-xs text-green-500 font-bold tracking-wider">#BinaryKGEC2025</div>
                                    </div>

                                    {/* Design elements */}
                                    <div className="absolute top-1/4 right-4 h-16 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
                                    <div className="absolute bottom-1/4 left-4 h-16 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Badge Creation Form */}
                    <div className="bg-black/70 w-88 h-108 p-8 rounded-md border border-green-500/30 shadow-lg shadow-green-500/10 backdrop-blur-sm relative">
                        {/* Glow corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-green-500/50"></div>
                        <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-green-500/50"></div>
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-green-500/50"></div>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-green-500/50"></div>

                        <h2 className="text-xl font-bold mb-6 text-green-500 flex items-center">
                            <span className="mr-2 animate-pulse">&gt;</span> Customize Your Badge
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="text-sm text-green-400 mb-2 flex items-center">
                                    <span className="text-green-500/70 mr-2">$</span> // Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-3 text-sm rounded-sm bg-black/80 text-green-500 border border-green-500/50 focus:border-green-400 focus:ring-1 focus:ring-green-400 outline-none transition tracking-wider"
                                    maxLength={20}
                                    aria-label="Your name for the badge"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-green-400 mb-2 flex items-center">
                                    <span className="text-green-500/70 mr-2">$</span> // Your Photo
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                    id="file-upload"
                                    aria-label="Upload your photo"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="cursor-pointer text-sm flex items-center justify-center gap-2 w-full p-3 bg-black/80 rounded-sm text-green-500 border border-green-500/50 hover:bg-green-900/20 transition group"
                                >
                                    <FaFileImage className="group-hover:animate-pulse" />
                                    {image ? "UPDATE_PHOTO.exe" : "UPLOAD_PHOTO.exe"}
                                </label>
                                {image && (
                                    <button
                                        onClick={() => setImage(null)}
                                        className="mt-2 text-green-500 text-xs hover:text-green-400 flex items-center"
                                    >
                                        <span className="text-green-500/70 mr-1">rm -f</span> delete_photo
                                    </button>
                                )}
                            </div>

                            <button
                                onClick={downloadBadge}
                                disabled={!name.trim()}
                                className="w-full text-base flex items-center justify-center gap-2 p-3 bg-green-500 rounded-sm text-black font-bold hover:bg-green-400 transition shadow-lg shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                                aria-label="Download your badge"
                            >
                                <div className="absolute inset-0 w-full bg-green-400/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                                <FaDownload />
                                DOWNLOAD_BADGE.exe
                            </button>

                            <p className="text-xs text-green-500/70 text-center mt-4 tracking-wide">
                                // Share with #BinaryKGEC2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for animations */}
            <style jsx>{`
                @keyframes scrollBinary {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(100vh); }
                }
                
                @keyframes scanLine {
                    0% { top: 0; opacity: 0.5; }
                    50% { opacity: 0.8; }
                    100% { top: 100%; opacity: 0.5; }
                }
                
                @keyframes shine {
                    from {transform: translateX(-100%) skewX(-15deg);}
                    to {transform: translateX(100%) skewX(-15deg);}
                }
                
                .animate-shine {
                    animation: shine 1.5s infinite;
                }
            `}</style>
        </div>
    );
};

export default BadgeBuilder;