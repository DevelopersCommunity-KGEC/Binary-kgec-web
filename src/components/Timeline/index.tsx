import React from 'react';
// import BinaryText from "../Animations/BinaryText";
import PageSection from '@/hooks/PageSection';
import { useScroll, motion } from 'framer-motion';
import { useRef } from 'react';
import { timeline } from '@/constants/timeline';
// import useTextScramble from "../Animations/text";
// import { useInView } from 'react-intersection-observer';

interface DataProps {
  head: string;
  date: string;
  des: string;
  links: string;
  add: string;
}

const Data2: React.FC<DataProps> = ({ head, date, des, links, add }: DataProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  });

  return (
    <li
      ref={ref}
      className="mx:w-[80%] mx-auto flex w-[60%] flex-col items-center justify-between first:mt-0 lg:w-full"
    >
      <figure className="absolute -left-[37px] stroke-green-600">
        <svg
          className="mx:w-[60px] mx:h-[60px] xs:w-[60px] xs:h-[60px] -rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle cx="75" cy="50" r="23" className="stroke-3 fill-black stroke-none" />
          <motion.circle
            style={{ pathLength: scrollYProgress }}
            cx="75"
            cy="50"
            r="23"
            className="fill-none stroke-[5px]"
          />
        </svg>
        <svg className="absolute left-7 top-2" height="19" viewBox="0 0 20 20">
          <path
            className="animate-pulse fill-green-100 stroke-1"
            viewBox="0 0 20 20"
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </figure>
      <motion.div
        initial={{ opacity: 0, y: '36%', x: '36%' }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="bg relative -left-[190px] -top-[1px] z-10 inline-block h-[40px] w-[40px] transform bg-green-100 bg-opacity-60"
      />
      <motion.div
        initial={{ opacity: 0, y: '36%', x: '36%' }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 inline-block w-[350px] transform bg-green-700 px-4 py-2"
        style={{ pathLength: scrollYProgress }}
      >
        <motion.div
          initial={{ opacity: 0, y: '36%', x: '36%' }}
          viewport={{ once: true, amount: 0.8 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.3 }}
          className="relative -ml-8 -mt-8 inline-block w-[350px] transform border-[3px] border-solid border-green-700 bg-black"
        >
          <h2 className="text-1.1xl xs:text-lg xs:text-sm mx-4 my-4 font-pixelate font-thin capitalize text-green-600 sm:text-xl">
            {date} {add}
          </h2>
          {/* <h3 className="capitalize font-bold text-1.5xl font-pixelate text-green-600 sm:text-xl xs:text-lg mx-4 my-4 ">
          {head}{" "}
        </h3>{" "} */}
          <a
            className="font-small text-0.5xl font-pixelate capitalize text-green-100"
            href={links}
          ></a>

          <p className="xs:text-lg mx:text-sm mx-4 my-4 w-full font-pixelate text-lg font-thin text-white sm:text-xl">
            {des}
          </p>
        </motion.div>
      </motion.div>
    </li>
  );
};

const Data: React.FC<DataProps> = ({ head, date, des, links, add }: DataProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  });

  return (
    <li
      ref={ref}
      className="mx:w-[80%] mx-auto flex w-[60%] flex-col items-center justify-between first:mt-0 lg:w-full"
    >
      <figure className="absolute -right-[37px] stroke-green-600">
        <svg
          className="mx:w-[60px] mx:h-[60px] xs:w-[60px] xs:h-[60px] -rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle cx="75" cy="50" r="23" className="stroke-3 fill-black stroke-none" />
          <motion.circle
            style={{ pathLength: scrollYProgress }}
            cx="75"
            cy="50"
            r="23"
            className="fill-none stroke-[5px]"
          />
        </svg>
        <svg className="absolute left-7 top-2" height="19" viewBox="0 0 20 20">
          <path
            className="animate-pulse fill-green-100 stroke-1"
            viewBox="0 0 20 20"
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </figure>
      <motion.div
        initial={{ opacity: 0, y: '-36%', x: '-36%' }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="bg relative -right-[190px] -top-[1px] z-10 inline-block h-[40px] w-[40px] transform bg-green-100 bg-opacity-60"
      />
      <motion.div
        initial={{ opacity: 0, y: '-36%', x: '-36%' }}
        viewport={{ once: true, amount: 0.8 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 inline-block w-[350px] transform bg-green-700 px-4 py-2"
        style={{ pathLength: scrollYProgress }}
      >
        <motion.div
          initial={{ opacity: 0, y: '-36%', x: '-36%' }}
          viewport={{ once: true, amount: 0.8 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.3 }}
          className="relative -mr-8 -mt-8 inline-block w-[350px] transform border-[3px] border-solid border-green-700 bg-black"
        >
          <h2 className="text-1.1xl xs:text-lg xs:text-sm mx-4 my-4 font-pixelate font-thin capitalize text-green-600 sm:text-xl">
            {date} {add}
          </h2>
          {/* <h3 className="capitalize font-bold text-1.5xl font-pixelate text-green-600 sm:text-xl xs:text-lg mx-4 my-4 ">
          {head}{" "}
        </h3>{" "} */}
          <a
            className="font-small text-0.5xl font-pixelate capitalize text-green-100"
            href={links}
          ></a>

          <p className="xs:text-lg mx:text-sm mx-4 my-4 w-full font-pixelate text-lg font-thin text-white sm:text-xl">
            {des}
          </p>
        </motion.div>
      </motion.div>
    </li>
  );
};

const Datamob: React.FC<DataProps> = ({ head, date, des, links, add }: DataProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'center center'],
  });

  return (
    <li
      ref={ref}
      className="mx-auto my-2 mb-8 flex w-[60%] flex-col items-center justify-between first:mt-0 md:w-[70%]"
    >
      <figure className="absolute -left-20 w-fit stroke-green-600">
        <svg
          className="mx:w-[30px] mx:h-[30px] xs:w-[60px] xs:h-[60px] -rotate-90"
          width="55"
          height="55"
          viewBox="0 0 100 100"
        >
          <circle cx="75" cy="50" r="23" className="stroke-3 fill-black stroke-none" />
          <motion.circle
            style={{ pathLength: scrollYProgress }}
            cx="75"
            cy="50"
            r="23"
            className="fill-none stroke-[5px]"
          />
        </svg>
        <svg className="absolute left-[20px] top-[5px]" height="15" viewBox="0 0 20 20">
          <path
            className="animate-pulse fill-green-100 stroke-1"
            viewBox="0 0 20 20"
            d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
          />
        </svg>
      </figure>
      <motion.div className="w-fit">
        <motion.div
          className="relative z-10 mt-8 inline-block w-[250px] transform bg-green-700 bg-opacity-90 px-4 py-2"
          style={{ pathLength: scrollYProgress }}
        >
          <motion.div className="relative -ml-8 -mt-8 inline-block w-[250px] transform border-[3px] border-solid border-green-700 bg-black">
            <h2 className="text-1.1xl xs:text-lg xs:text-sm mx-4 my-4 font-pixelate font-thin capitalize text-green-600 sm:text-xl">
              {date} {add}
            </h2>
            <h3 className="text-1.5xl xs:text-lg mx-4 my-4 font-pixelate font-bold capitalize text-white sm:text-xl">
              {head}{' '}
            </h3>{' '}
            <a
              className="font-small text-0.5xl font-pixelate capitalize text-green-100"
              href={links}
            ></a>
            {/* <p className="font-thin text-lg  text-white sm:text-xl font-pixelate xs:text-lg w-full mx:text-sm mx-4 my-4  mr-4">
          {des}
        </p> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </li>
  );
};

const Timeline = () => {
  const ref1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref1,
    offset: ['start end', 'center start'],
  });

  return (
    <PageSection id="timeline">
      <div className="mb-10">
        <div className="mx:text-[4rem] mb-10 mt-16 font-pixelate text-[3rem] font-bold text-white">
          <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                02.
              </span>
              <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                Timeline
              </span>

              <div className="item-center flex flex-col justify-center">
                <div className="right-full ml-4 mt-[10px] h-[4px] w-[70vh] transform bg-green-500"></div>
              </div>
            </h2>
          </div>
          <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                02.
              </span>
              <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                Timeline
              </span>

              <div className="item-center flex flex-col justify-center">
                <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
              </div>
            </h2>
          </div>
        </div>
        <div ref={ref1} className="lg:flex lg:justify-between">
          <div className="relative left-[50%] hidden w-full lg:block lg:w-[4px]">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="mx:w-[3px] xs:w-[2px] mx:left-[30px] xs:left-[20px] absolute top-0 h-full w-[4px] origin-top bg-green-600 lg:left-0 lg:w-[4px]"
            />
          </div>
          {/* Left side (Desktop) */}
          <div className="relative w-full lg:mb-0 lg:w-1/2">
            <div className="left-0 hidden lg:block">
              <ul className="flex w-full flex-col items-center justify-center">
                {/* Left side timeline items */}
                <div className="mt-[35%]">
                  <Data
                    head="Registration End"
                    date="25th March"
                    des="Registration End"
                    links=""
                    add=""
                  />
                </div>
                <div className="mt-[47%]">
                  <Data
                    head="Hackathon Starts"
                    date="29th March"
                    des="Hackathon Starts"
                    links=""
                    add=""
                  />
                </div>
                <div className="mt-[46%]">
                  <Data
                    head="Hackathon Ends"
                    date="30th March"
                    des="Hackathon Ends"
                    links=""
                    add=""
                  />
                </div>
              </ul>
            </div>
          </div>

          {/* Right side (Desktop) */}
          <div className="relative hidden w-full lg:block lg:w-1/2">
            <ul className="flex w-full flex-col items-center justify-center">
              {/* Right side timeline items */}
              <div className="mb-[47%]">
                <Data2
                  head="Registration Start"
                  date="3rd March"
                  des="Registration Start"
                  links=""
                  add=""
                />
              </div>
              <div className="mb-[47%]">
                <Data2
                  head="Approvals Roll Out"
                  date="16th-26th March"
                  des="Approvals Roll Out"
                  links=""
                  add=""
                />
              </div>
              <div className="mb-[47%]">
                <Data2
                  head="Submission of Projects"
                  date="30th March"
                  des="Submission of Projects"
                  links=""
                  add=""
                />
              </div>
            </ul>
          </div>
          {/* Mobile view (alternating columns) */}
          <div className="ml-4 mt-4 lg:hidden">
            <div ref={ref1} className="mx:w-full relative mx-auto w-[75%] lg:w-[90%]">
              <motion.div
                style={{ scaleY: scrollYProgress }}
                className="mx:w-[3px] xs:w-[2px] mx:left-[30px] xs:left-[20px] absolute -left-[55px] top-0 h-full w-[4px] origin-top bg-green-600 lg:left-9 lg:w-[4px]"
              />
              <ul className="xs:ml-2 ml-4 flex w-full flex-col items-start justify-between">
                {timeline.map((item, index) => (
                  <Datamob
                    key={index}
                    head={item.title}
                    date={item.date}
                    des={item.description}
                    links="https://binary.com"
                    add=""
                  />
                ))}
              </ul>
            </div>
          </div>
          {/* Repeat this pattern for additional items */}
        </div>
      </div>
    </PageSection>
  );
};

export default Timeline;
