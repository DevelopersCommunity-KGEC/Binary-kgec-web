import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu4Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Transition } from '@headlessui/react';
import { useGlitch } from 'react-powerglitch';
import NavLogo from '@public/images/binarylogo2.png';
import NavItem from './NavItem';
import { navItems } from '@/constants/navItems';

const Navbar = () => {
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

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const closeMobileMenu = () => {
    setNav(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    // Subscribe to scroll events
    window.addEventListener('scroll', handleScroll);

    // Unsubscribe when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed z-[100] h-[60px] w-full shadow-xl shadow-black duration-300 ease-in-out'
          : 'fixed z-[100] h-[60px] w-full'
      }
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
          <ul className="mr-11 hidden font-pixelate text-white md:flex">
            <ul className="flex gap-2">
              {navItems.map((item) => (
                <NavItem key={item.name} name={item.name} link={item.link} isActive={false} />
              ))}
            </ul>
          </ul>
          <div style={{ color: 'white' }} onClick={handleNav} className="text-white md:hidden">
            <div className="mr-2 text-white">
              {nav ? (
                <div
                  onClick={handleNav}
                  className="cursor-pointer rounded-full bg-green-950 p-3 font-bold text-white opacity-0 shadow-lg shadow-green-700"
                >
                  <AiOutlineClose size={22} />
                </div>
              ) : (
                <motion.div
                  whileTap={{ scale: 0.6, rotate: 90 }} // Scale down when tapped
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <RiMenu4Line size={32} />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'fixed left-0 top-0 h-screen w-full bg-black/70 bg-opacity-50 backdrop-blur-sm backdrop-filter md:hidden'
            : ''
        }
      >
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: 0 }}
              exit={{ left: '-100%' }}
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className="fixed left-0 top-0 h-screen w-full bg-green-950 bg-opacity-50 p-10 shadow-lg shadow-green-700 backdrop-blur-md backdrop-filter md:hidden"
              // className='md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-green-950 backdrop-filter backdrop-blur-md bg-opacity-50 shadow-green-700 shadow-lg p-10'
              style={{ backdropFilter: nav ? 'blur(10px)' : 'none' }}
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <Link href="/">
                    <Image src={NavLogo} width="87" height="35" alt="/" />
                  </Link>{' '}
                  <motion.div
                    initial={{ opacity: 1 }}
                    whileTap={{ scale: 0.6, rotate: -90, opacity: 0 }} // Scale down when tapped
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <div
                      onClick={handleNav}
                      className="cursor-pointer rounded-full p-3 font-extrabold text-white shadow-md shadow-green-700"
                    >
                      <AiOutlineClose size={22} />
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="flex flex-col py-4">
                <ul className="font-pixelate uppercase text-white">
                  <ul className="relative flex flex-col items-center justify-around gap-2">
                    {navItems.map((item) => (
                      <NavItem
                        key={item.name}
                        name={item.name}
                        link={item.link}
                        isActive={false}
                        closeMobileMenu={closeMobileMenu}
                      />
                    ))}
                  </ul>
                </ul>
                <div className="pt-40"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
