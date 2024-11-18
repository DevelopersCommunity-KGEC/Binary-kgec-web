import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
// import "./fix.css";
import { cn } from "@/lib/utils";
import localFont from 'next/font/local';
import MatrixRain from "@/components/Animations/MatrixRain";

const sfPixelate = localFont({ src: "../../public/fonts/SFPixelate.ttf" });
const poppins = localFont({src: "../../public/fonts/Poppins/Poppins-Bold.ttf"})

export const metadata: Metadata = {
  title: "KGEC Hackathon 2025",
  description:
    "Join KGEC Hackathon 2025, a platform for innovation and collaboration. Build impactful solutions across tracks like Web3, Open Innovation, Medical Tech, and more. Unite with tech enthusiasts to shape the future.",
  keywords: [
    "KGEC Hackathon",
    "hackathon 2025",
    "technical innovation",
    "hackathon tracks",
    "Web3 hackathon",
    "Open Innovation",
    "Medical Tech",
    "technology event",
    "collaboration",
    "innovation platform",
    "coding competition",
    "technical challenges",
    "hackathon India",
    "KGEC event",
    "building meaningful solutions",
    "future technology",
    "innovation hub",
    "teamwork",
    "tech hackathon",
    "KGEC Hackathon participants",
  ],
  openGraph: {
    type: "website",
    url: "https://kgechackathon2025.com",
    title: "KGEC Hackathon 2025",
    description:
      "KGEC Hackathon 2025 brings together innovators to build meaningful solutions across diverse tracks like Web3, Medical Tech, and more.",
    images: [
      {
        url: "https://kgechackathon2025.com/assets/kgec-hackathon-banner.jpg",
        width: 1200,
        height: 630,
        alt: "KGEC Hackathon 2025 Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@KGECHackathon",
    title: "KGEC Hackathon 2025",
    description:
      "A technical hackathon fostering innovation and collaboration. Join us to create impactful solutions in Web3, Medical Tech, and other domains.",
    images: "https://kgechackathon2025.com/assets/kgec-hackathon-banner.jpg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full  ">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn("relative h-full font-sans antialiased bg-black", sfPixelate.className,poppins.className)}
      >
        <main className="relative flex flex-col min-h-screen  overflow-hidden">
          <div className="bg-black/70 ">
            <div className="bg-black/70 opacity-30 overflow-hidden  font-pixelate">
              {<MatrixRain timeout={75} />}
            </div>
            <div className="flex-grow flex-1">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
