import { TypeAnimation } from 'react-type-animation';
import BinaryText from '../Animations/BinaryText';
import TrackCard from './TrackCard';
import {
  FaTree,
  FaGraduationCap,
  FaHeartbeat,
  FaCubes,
  FaRobot,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaStar,
  FaCloud,
  FaMicrochip,
} from 'react-icons/fa';
import { useState } from 'react';

const Tracks = () => {
  const tracks = [
    {
      title: 'Environment',
      description:
        'Develop solutions for environmental challenges including climate change, sustainability and conservation technologies.',
      icon: <FaTree size={30} />,
    },
    {
      title: 'Education',
      description:
        'Create innovative platforms and tools to revolutionize learning experiences and educational accessibility.',
      icon: <FaGraduationCap size={30} />,
    },
    {
      title: 'Health',
      description:
        'Build applications and systems to address healthcare challenges, patient care and medical technology.',
      icon: <FaHeartbeat size={30} />,
    },
    {
      title: 'Web3',
      description:
        'Explore Blockchain, Decentralized Applications and the future of internet technologies.',
      icon: <FaCubes size={30} />,
    },
    {
      title: 'AI/ML & CI',
      description:
        'Develop intelligent systems using Artificial Intelligence, Machine Learning, and Computational Intelligence to solve complex problems efficiently. To be eligible for this track, teams must integrate Weights & Biases (W&B) for model training, experiment tracking, and performance visualization.',
      icon: <FaRobot size={30} />,
    },
    {
      title: 'Cloud Computing',
      description:
        'Utilize Google Cloud for AI/ML, scalable computing, big data analytics, and secure cloud solutions.',
      icon: <FaCloud size={30} />,
    },
    {
      title: 'Hardware',
      description:
        'Design and prototype innovative hardware-based solutions, including IoT devices, embedded systems, and robotics.',
      icon: <FaMicrochip size={30} />,
    },
    {
      title: 'Open Innovation',
      description:
        'Create solutions for any problem statement of your choice using cutting-edge technologies.',
      icon: <FaLightbulb size={30} />,
    },
    {
      title: 'Best Beginners Team',
      description: 'Awarded to the best performing team consisting of first-time participants.',
      icon: <FaUsers size={30} />,
    },
    {
      title: 'Best Girls Team',
      description:
        'Recognizing an all-girls team for their outstanding innovation and problem-solving skills.',
      icon: <FaAward size={30} />,
    },
    {
      title: "People's Choice",
      description:
        'Given to the team that wins the most votes from the audience for their project.',
      icon: <FaStar size={30} />,
    },
  ];

  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index)); // Toggle the card
  };

  return (
    <div id="tracks" className="mt-[96px] md:mt-16">
      <div className="mt-16 text-center">
        <BinaryText
          className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]"
          reveal
        >
          <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                03.
              </span>
              <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                Tracks
              </span>

              <div className="item-center flex flex-col justify-center">
                <div className="right-full ml-4 mt-[10px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
              </div>
            </h2>
          </div>
          <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
            <h2 className="relative mx-0 mb-10 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
              <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                03.
              </span>
              <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                Tracks
              </span>

              <div className="item-center flex flex-col justify-center">
                <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
              </div>
            </h2>
          </div>
        </BinaryText>

        <div className="mx-auto mt-12 max-w-6xl px-4">
          <div className="mb-6 font-pixelate text-sm text-gray-400">
            <p>Hover over a track to learn more</p>
            <div className="mt-2 flex items-center justify-center space-x-2">
              <span className="inline-block h-1 w-1 bg-green-500"></span>
              <span className="inline-block h-1 w-1 bg-green-500"></span>
              <span className="inline-block h-1 w-1 bg-green-500"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {tracks.map((track, index) => (
              <div
                className={
                  tracks.length % 2 === 1 && index == tracks.length - 1
                    ? 'col-span-1 md:col-span-2 md:mx-64'
                    : ''
                }
                key={index}
              >
                <TrackCard
                  key={index}
                  title={track.title}
                  description={track.description}
                  icon={track.icon}
                  isActive={activeCard === index}
                  onToggle={() => handleToggle(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
