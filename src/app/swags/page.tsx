'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import BadgeBuilder from '@/components/BadgeBuilder';
import Link from 'next/link';
import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

import NavLogo from '@public/images/binarylogo2.png';


const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false }); // Disable SSR to prevent hydration mismatch
const MaxWidthWrapper = dynamic(() => import('@/hooks/MaxWidthWrapper'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

const Section = styled.section<{ theme: { body: string } }>`
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Page = () => {

    const glitch = useGlitch({
        playMode: 'hover',
        createContainers: true,
        hideOverflow: false,
        timing: {
            duration: 250,
            iterations: 1,
        },
        glitchTimeSpan: {
            start: 0,
            end: 1,
        },
        shake: {
            velocity: 15,
            amplitudeX: 0.2,
            amplitudeY: 0.2,
        },
        slice: {
            count: 6,
            velocity: 15,
            minHeight: 0.02,
            maxHeight: 0.15,
            hueRotate: true,
        },
        pulse: false,
    });

    return (
        <Section>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
            >
                <div
                    className={`fixed z-[100] h-[60px] w-full shadow-xl shadow-black duration-300 ease-in-out`}
                >
                    <div className="flex h-full w-full items-center justify-between bg-opacity-50 px-2 backdrop-blur-xl backdrop-filter 2xl:px-16">
                        <Link href="/">
                            <Image
                                src={NavLogo}
                                // height={auto}
                                // width={12}
                                alt="/"
                                className="px-2  w-[13%] cursor-pointer md:w-[12%]"
                            />
                        </Link>
                        <div>
                            <a href="/" ref={glitch.ref} className='text-md hover:text-md flex justify-center gap-5 rounded-none bg-black/0 font-pixelate text-sm text-white hover:font-bold hover:text-white'>
                                Back to landing Page
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1 }}
            >
                <MaxWidthWrapper>
                    <div className='min-h-screen flex justify-center items-center text-white'>
                        <BadgeBuilder />

                    </div>
                </MaxWidthWrapper>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.2 }}
                >
                    <Footer />
                </motion.div>
            </motion.div>
        </Section>
    );
};

export default Page;
