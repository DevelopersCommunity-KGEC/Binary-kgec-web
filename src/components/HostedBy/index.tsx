import { TypeAnimation } from "react-type-animation";
import BinaryText from "@/components/Animations/BinaryText";
// import PageSection from "@/hooks/PageSection";
// import useTextScramble from "../Animations/text";

const Tracks = () => {
  return (
    <div id="hostedby" className="mt-[96px] md:mt-[116px] ">
      <div className="mt-20 text-center">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
        
        <div className="overflow-x-hidden w-full pt-5 sm:hidden text-xl shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 uppercase md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-1">
      02.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-2">
  Hosted By
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full  transform h-[1px] w-[70vh] bg-[#1d6339] mt-[10px] ml-4"></div></div>
  </h2>
</div>
          <div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-4">
      02.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
    Hosted By
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full top-[55%] transform h-[1px] w-[70vh] bg-[#1d6339] mt-[25px] ml-4"></div></div>
  </h2>
</div>
        </BinaryText>
        <div className="flex text-center justify-center mt-10 items-center font-pixelate font-bold text-3xl text-green-500">
          <TypeAnimation sequence={[500, `Coming Soon...`]} speed={80} />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
