import { TypeAnimation } from 'react-type-animation';
import BinaryText from '@/components/Animations/BinaryText';
import Image from 'next/image';

import dcIMage from '@public/host/dc_transparent.png';
import ieeeKolakata from '@public/assets/IEEE_kolkata.png';

const HostedBy = () => {
  return (
    <div id="hostedby" className="flex flex-col w-full items-center justify-center gap-6 px-2">
      {/* <div className="flex flex-col items-center justify-center gap-1 ">

        <BinaryText className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem] mb-2" reveal>
          <div className="shad relative w-full overflow-x-hidden text-xl sm:hidden">
            <h2 className="relative mx-0 flex max-w-sm flex-row text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-0 font-bold tracking-wider text-gray-200 opacity-85">
                Hosted By
              </span>
            </h2>
          </div>
          <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
            <h2 className="relative mx-0 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-0 font-bold tracking-wider text-gray-200 opacity-85">
                Hosted By
              </span>
            </h2>
          </div>
        </BinaryText>
        <p className='font-pixelate text-xs md:text-base text-white text-center'>Dev Community - KGEC <br /> in collaboration with <br /> IEEE CIS Student Chapter- Kalyani</p>

      </div>

      <Image src={dcIMage} alt="DC" height={200} width={200} className='w-24 h-24 mb-0 object-cover' /> */}

      <BinaryText className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem] mb-2" reveal>
        <div className="shad relative w-full overflow-x-hidden text-xl sm:hidden">
          <h2 className="relative mx-0 flex max-w-sm flex-row text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
            <span className="flex-none pl-0 font-bold tracking-wider text-gray-200 opacity-85">
              Hosted By
            </span>
          </h2>
        </div>
        <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
          <h2 className="relative mx-0 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
            <span className="flex-none pl-0 font-bold tracking-wider text-gray-200 opacity-85">
              Hosted By
            </span>
          </h2>
        </div>
      </BinaryText>

      <div className="grid grid-cols-12 w-full items-center justify-evenly gap-4 px-2 md:px-32">

        <div className='col-span-6 flex flex-col items-center justify-center gap-1'>
          <Image src={dcIMage} alt="DC" height={200} width={200} className='w-24 h-24 mb-0 object-cover' />
        </div>
        <div className='col-span-1 md:col-span-2 bg-white/20 w-0.5 h-full'></div>
        <div className='col-span-5 md:col-span-4 flex flex-col items-center justify-center gap-1'>

          {/* <p className='font-pixelate text-xs md:text-base text-white text-center'>In Collaboration With <br /> IEEE CIS Student Chapter - Kalyani</p> */}
          <Image src={ieeeKolakata} alt="DC" height={200} width={200} className='mb-0 object-cover' />

        </div>
      </div>


    </div>
  );
};

export default HostedBy;
