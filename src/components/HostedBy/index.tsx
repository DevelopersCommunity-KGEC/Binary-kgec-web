import { TypeAnimation } from 'react-type-animation';
import BinaryText from '@/components/Animations/BinaryText';
import Image from 'next/image';

import dcIMage from '../../../public/host/dc_transparent.png';

const HostedBy = () => {
  return (
    <div id="hostedby" className="flex w-full items-center justify-center gap-6">
      <BinaryText className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]" reveal>
        <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
          <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
            <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
              Hosted BY
            </span>
          </h2>
        </div>
        <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
          <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
            <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
              Hosted BY
            </span>
          </h2>
        </div>
      </BinaryText>
      <div>
        <Image src={dcIMage} alt="DC" height={200} width={200} className='w-24 h-24 mb-6' />
      </div>
    </div>
  );
};

export default HostedBy;
