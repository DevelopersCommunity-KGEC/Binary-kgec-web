// NavItem.tsx
'use client';
import { cn } from '@/lib/utils';
import React, { Dispatch, SetStateAction } from 'react';
import { useGlitch } from 'react-powerglitch';

const NavItem = ({
  name,
  link,
  isActive,
  setIsOpen,
  closeMobileMenu,
}: {
  name: string;
  link: string;
  isActive: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  closeMobileMenu?: () => void; // Add closeMobileMenu prop
}) => {
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
    <li
      ref={glitch.ref}
      className="relative flex h-12 items-center py-2"
      onClick={() => {
        if (setIsOpen) setIsOpen(false);
        if (closeMobileMenu) closeMobileMenu(); // Call closeMobileMenu if provided
      }}
    >
      <a
        href={link}
        className={cn(
          'text-md hover:text-md flex justify-center gap-5 rounded-none bg-black/0 font-pixelate text-sm text-white hover:font-bold hover:text-white',
        )}
      >
        <span>{name}</span>
      </a>
      <span className=""></span>
    </li>
  );
};

export default NavItem;
