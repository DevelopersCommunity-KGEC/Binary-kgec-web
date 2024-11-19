import PageSection from '@/hooks/PageSection';
import BinaryText from '../Animations/BinaryText';
import Image from 'next/image';
import Link from 'next/link';
// import useTextScramble from "../Animations/text";
import { sponsors } from '@/constants/sponsors';

const Sponsors = () => {
  return (
    <PageSection>
      <div id="sponsors" className="mb-10 flex flex-col font-pixelate text-white sm:mb-10">
        <div>
          <div className="mb-20 mt-[96px] md:mt-[116px]">
            <BinaryText
              className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]"
              reveal
            >
              <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
                <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
                  <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                    07.
                  </span>
                  <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                    Sponsors
                  </span>

                  <div className="item-center flex flex-col justify-center">
                    <div className="right-full ml-4 mt-[10px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                  </div>
                </h2>
              </div>
              <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
                <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
                  <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                    07.
                  </span>
                  <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                    Sponsors
                  </span>

                  <div className="item-center flex flex-col justify-center">
                    <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                  </div>
                </h2>
              </div>
            </BinaryText>
          </div>

          {sponsors.map((sponsorItem) => {
            return (
              <div
                className="m-16 flex flex-col items-center justify-center"
                key={sponsorItem.title}
              >
                <h2 className="mb-8 text-center text-[1.5em] font-bold md:text-[2rem]">
                  {sponsorItem.title}
                </h2>
                <div className="grid w-[calc(80vw)] grid-cols-1 gap-4 rounded-lg border-2 border-green-700 bg-black/5 p-5 shadow-md shadow-green-700/80 backdrop-blur-sm md:w-[calc(60vw)]">
                  {sponsorItem.sponsors.length == 0 ? (
                    sponsorItem.sponsors.map((sponsor) => (
                      <div className="text-center" key={sponsor.link}>
                        <Link href={sponsor.link}>
                          <Image src={sponsor.logo} width={300} height={300} alt={sponsor.alt} />
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="text-center" key="default">
                      Coming Soon...
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default Sponsors;
