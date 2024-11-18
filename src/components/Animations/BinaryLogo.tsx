"use client";

import React from "react";
import { motion } from "framer-motion";
import { useGlitch } from "react-powerglitch";
import Image from "next/image";
import logo from "@public/images/logo.svg";

const BinaryLogo = () => {
  
const glitch = useGlitch({
  playMode: "always",
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 3000,
  },
  glitchTimeSpan: {
    start: 0,
    end: 0.7,
  },
  shake: {
    velocity: 10,
    amplitudeX: 0.04,
    amplitudeY: 0.04,
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
   
        <div className="bg-transparent" id="home">
          <div
            className="flex flex-col items-center justify-center lg:mt-[10%] mt-[15%] w-screen"
            style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
          >
          <motion.div
                ref={glitch.ref}
                // className="flex item-center justify-center "
                 className=" h-auto w-[80%] lg:w-[70%] mx-auto flex flex-col items-center justify-center"
                 initial={{ opacity: 1,scale:0.8 }}
                animate={{ opacity: 0,}}
                transition={{
                  duration: 2,
                  
          
                }}
              >
                <Image
                  // width={100}
                  className=" w-screen flex items-center justify-center "
                  src={logo}
                  alt="Binary Hackathon"
                />
          </motion.div></div></div>
  );
};

export default BinaryLogo;
