import PageSection from '@/hooks/PageSection';
import BinaryText from '../Animations/BinaryText';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
// import useTextScramble from "../Animations/text";
import { sponsors } from '@/constants/sponsors';
interface Sponsor {
  logo: string | StaticImageData;
  link?: string;
  alt: string;
}

const Sponsors = () => {
  return (
    // <PageSection>
    <div id="sponsors" className="flex flex-col font-pixelate text-white">
      <div>
        <div className="mb-20">
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
          console.log(sponsorItem, 'dfkn');

          let gridClass = "grid w-[calc(80vw)] gap-4 rounded-lg bg-black/5 p-5 md:w-[calc(60vw)]";
          let imageSizeClass = "w-[200px] h-[200px]"; // Default size

          if (sponsorItem.title === 'Tera Sponsor') {
            gridClass += " grid-cols-1";
            imageSizeClass = "w-96 h-32  object-contain";
          } else if (sponsorItem.title === 'Giga Sponsor') {
            gridClass += " grid-cols-3";
            imageSizeClass = "w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] object-contain";
          } else if (sponsorItem.title === 'Mega Sponsor') {
            gridClass += " grid-cols-4";
            imageSizeClass = "w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-contain";
          } else if (sponsorItem.title === 'Kilo Sponsor') {
            gridClass += " grid-cols-5";
            imageSizeClass = "w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] object-contain";
          } else if (sponsorItem.title === 'Platform Partner') {
            gridClass += " grid-cols-1";
            imageSizeClass = "w-32 sm:w-28 h-24 object-contain";
          } else {
            gridClass += " grid-cols-5";
          }

          return (
            <div className="m-16 flex flex-col items-center justify-center" key={sponsorItem.title}>
              <h2 className="mb-8 text-center text-[1.5em] font-bold md:text-[2rem]">
                {sponsorItem.title}
              </h2>
              <div className={gridClass}>
                {sponsorItem.sponsors.length === 0 ? (
                  <div className="text-center" key="default">
                    Coming Soon...
                  </div>
                ) : (
                  sponsorItem.sponsors.map((sponsor: Sponsor) => (
                    <div className="text-center flex justify-center items-center" key={sponsor.link}>
                      <a target="_blank" href={sponsor.link}>
                        <Image
                          src={sponsor.logo}
                          width={500}
                          height={500}
                          className={imageSizeClass}
                          alt={sponsor.alt}
                        />
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    // </PageSection>
  );
};

export default Sponsors;




// import BinaryText from '../Animations/BinaryText';
// import Image, { StaticImageData } from 'next/image';
// import { sponsors } from '@/constants/sponsors';

// interface Sponsor {
//   logo: string | StaticImageData;
//   link?: string;
//   alt: string;
// }

// const sizeMap: Record<string, { width: number; height: number }> = {
//   'Tera Sponsor': { width: 550, height: 550 },
//   'Giga Sponsor': { width: 500, height: 500 },
//   'Meta Sponsor': { width: 450, height: 450 },
//   'Kilo Sponsor': { width: 400, height: 400 },
//   'Platform Partner': { width: 250, height: 250 },
//   default: { width: 550, height: 550 },
// };

// const Sponsors = () => {
//   return (
//     <div id="sponsors" className="mb-10 flex flex-col font-pixelate text-white sm:mb-10">
//       <div className="mb-20">
//         <BinaryText className="text-[2rem] font-bold text-white md:text-[3rem]" reveal>
//           <h2 className="relative mb-10 flex items-center font-pixelate font-bold uppercase">
//             <span className="pl-4 text-green-500 opacity-85">07.</span>
//             <span className="pl-4 text-gray-200 opacity-85">Sponsors</span>
//             <div className="ml-4 mt-3 h-[1px] w-[70vh] bg-[#1d6339]"></div>
//           </h2>
//         </BinaryText>
//       </div>

//       {sponsors.map((sponsorItem) => (
//         <div className="mb-16 flex flex-col items-center" key={sponsorItem.title}>
//           <h2 className="mb-8 text-center text-[1.5em] font-bold md:text-[2rem]">
//             {sponsorItem.title}
//           </h2>

//           <div className="grid w-[90vw] grid-cols-1 gap-6 rounded-lg bg-black/5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {sponsorItem.sponsors.length === 0 ? (
//               <div className="col-span-full text-center">Coming Soon...</div>
//             ) : (
//               sponsorItem.sponsors.map((sponsor: Sponsor) => {
//                 const { width, height } = sizeMap[sponsorItem.title] || sizeMap.default;
//                 return (
//                   <div className="text-center" key={sponsor.link}>
//                     <a target="_blank" rel="noopener noreferrer" href={sponsor.link}>
//                       <Image src={sponsor.logo} width={width} height={height} alt={sponsor.alt} />
//                     </a>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sponsors;
