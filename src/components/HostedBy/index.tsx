import { TypeAnimation } from 'react-type-animation';
import BinaryText from '@/components/Animations/BinaryText';
// import PageSection from "@/hooks/PageSection";
// import useTextScramble from "../Animations/text";

const Tracks = () => {
  return (
    <div id="hostedby" className="mt-[96px] md:mt-[116px]">
      <div className="mt-20 text-center">
        <BinaryText
          className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]"
          reveal
        >
          <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                02.
              </span>
              <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                Hosted By
              </span>

              <div className="item-center flex flex-col justify-center">
                <div className="right-full ml-4 mt-[10px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
              </div>
            </h2>
          </div>
          <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                02.
              </span>
              <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                Hosted By
              </span>

              <div className="item-center flex flex-col justify-center">
                <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
              </div>
            </h2>
          </div>
        </BinaryText>
        <div className="mt-10 flex items-center justify-center text-center font-pixelate text-3xl font-bold text-green-500">
          <TypeAnimation sequence={[500, `Coming Soon...`]} speed={80} />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
