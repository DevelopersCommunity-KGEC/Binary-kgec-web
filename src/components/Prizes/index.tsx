import BinaryText from '../Animations/BinaryText';
import PageSection from '@/hooks/PageSection';
// import useTextScramble from "../Animations/text";
import styled from 'styled-components';
// import * as demoProfileImg from "../../public/demoprofile.png";
import * as logo from '@public/images/binarylogo2.png';
import * as position1 from '@public/images/Asset 2.png';
import * as position2 from '@public/images/Asset 3.png';
import * as position3 from '@public/images/Asset 4.png';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
// import Link from "next/link";
// // import { Linkedin, Twitter } from "lucide-react";
// // import { buttonVariants } from "../ui/button";
// // import { cn } from "@/lib/utils";
// // import Confetticomp from "../Confeetti";
const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
};

/**
 * 3D Flip
 * Created By Joshua Guo
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */

interface MemberComponentProps {
  imgurl: {
    src: string;
    width: number;
    height: number;
  };
  imgurl2: {
    src: string;
    width: number;
    height: number;
  };
  name: string;
  TotalPrize: string;
  CashPrize: string;
}

const Section = styled.section<{ theme: { body: string } }>`
  min-height: full;
  width: full;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const ResponsiveCardContainer = styled.div`
  width: fit-content;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 864px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Item = styled.div`
  width: 15rem; // Adjust as needed
  padding: 1rem 0;
  color: white;
  margin: 2rem 1rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1);
    .image-container {
      transform: translateY(-2rem) scale(1);
    }
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 1rem;
  border-radius: 20px;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
`;
// MemberComponent component definition
const MemberComponent: React.FC<MemberComponentProps> = ({
  imgurl,
  imgurl2,
  name = '',
  CashPrize = ' ',
  TotalPrize = '',
}) => {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

  const handleMouseMove = (event: React.MouseEvent) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <motion.div
      className="md:m-0 lg:m-4"
      style={{
        perspective: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          margin: 'auto',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          perspective: 800,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          rotateX,
          rotateY,
        }}
        transition={{ velocity: 0 }}
      >
        <motion.div
          key="card"
          style={{
            boxShadow: '0px 0px 30px -7px rgba(0,0,0,0.45)',
            borderRadius: 10,

            transformStyle: 'preserve-3d',
            perspective: 800, // Set perspective on the card
          }}
          transition={{ velocity: 0 }}
        >
          {' '}
          <div className="absolute right-2 top-16 w-[100px] p-6">
            <Image
              className="flex w-40 justify-center"
              src={imgurl2.src} // Use the imported image URL here
              alt={name}
              width={imgurl2.width} // Specify the width
              height={imgurl2.height} // Specify the height
            />
          </div>
          <div className="text-1.5xl shad xs:text-lg ml-20 mr-4 mt-2 -skew-x-12 bg-green-700 text-center font-pixelate font-bold capitalize text-white shadow-md shadow-green-700 sm:text-xl">
            {name}
          </div>
          <Item className="image-container flex flex-col items-start justify-center rounded-b-lg border-2 border-green-700 bg-transparent">
            <div className="mt-6 flex flex-col gap-4">
              <div className="mt-12 flex flex-col">
                <h1 className="text-md mx:text-sm ml-4 w-[90%] text-start font-pixelate font-semibold text-green-500">
                  Total Prize
                </h1>
                <p className="mx:text-sm ml-6 w-[90%] text-start font-pixelate text-xl font-thin text-white">
                  {TotalPrize}
                </p>
              </div>
              <div className="flex flex-col">
                <h1 className="text-md mx:text-sm ml-4 w-[90%] text-start font-pixelate font-semibold text-green-500">
                  Cash Prize
                </h1>
                <p className="mx:text-sm mb-4 ml-6 w-[90%] text-start font-pixelate text-lg font-thin text-white">
                  {CashPrize}
                </p>
              </div>
            </div>
          </Item>
          <div className="hover: absolute -left-2 -top-0 w-[100px] overflow-hidden border-2 border-solid border-green-700 bg-black p-6">
            <Image
              className="flex w-40 justify-center"
              src={imgurl.src} // Use the imported image URL here
              alt={name}
              width={imgurl.width} // Specify the width
              height={imgurl.height} // Specify the height
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Price component definition
const Price: React.FC = () => {
  return (
    <PageSection id="prizes">
      <Section>
        {/*<Confetticomp/>*/}
        <div className="mt-[96px] md:mt-[116px]">
          <BinaryText
            className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]"
            reveal
          >
            <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
              <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
                <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                  04.
                </span>
                <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                  Prizes
                </span>

                <div className="item-center flex flex-col justify-center">
                  <div className="right-full ml-4 mt-[10px] h-[4px] w-[70vh] transform bg-green-500"></div>
                </div>
              </h2>
            </div>
            <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
              <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
                <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                  04.
                </span>
                <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                  Prizes
                </span>

                <div className="item-center flex flex-col justify-center">
                  <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                </div>
              </h2>
            </div>
          </BinaryText>

          <ResponsiveCardContainer className="w-fit">
            <div className="lg:order-1 lg:mb-20">
              <MemberComponent
                imgurl={{ src: position1.default.src, width: 10, height: 10 }}
                name="1st Prize "
                CashPrize="25k"
                TotalPrize="30k"
                imgurl2={{ src: logo.default.src, width: 10, height: 10 }}
              />
            </div>
            <div className="mb-20 mt-20 lg:order-2 lg:mb-0 lg:mt-0">
              <MemberComponent
                imgurl={{ src: position2.default.src, width: 10, height: 10 }}
                name="2nd Prize"
                CashPrize="15K"
                TotalPrize="20K"
                imgurl2={{ src: logo.default.src, width: 10, height: 10 }}
              />
            </div>
            <MemberComponent
              imgurl={{ src: position3.default.src, width: 10, height: 10 }}
              name="3rd Prize"
              CashPrize="10K"
              TotalPrize="15K"
              imgurl2={{ src: logo.default.src, width: 10, height: 10 }}
            />
            {/* ... other MemberComponent instances */}
          </ResponsiveCardContainer>
        </div>
      </Section>
    </PageSection>
  );
};

export default Price;
