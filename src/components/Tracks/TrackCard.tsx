// import React, { useState } from 'react';

// interface TrackCardProps {
//   title: string;
//   description: string;
//   icon?: React.ReactNode;
// }

// const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="track-card relative h-56 w-full cursor-pointer rounded-none border border-green-500/30 bg-black/40 p-6 transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       onTouchStart={() => setIsHovered(true)}
//       onTouchEnd={() => setTimeout(() => setIsHovered(false), 1000)}
//     >
//       <div className="flex h-full flex-col items-center justify-center text-center">
//         <div className="mb-4 text-green-500">{icon}</div>
//         <h3 className="font-pixelate text-2xl font-bold text-white">{title}</h3>

//         <div
//           className={`description-overlay absolute inset-0 flex items-center justify-center rounded-lg bg-black/90 p-4 opacity-0 backdrop-blur-sm transition-opacity duration-300 ${
//             isHovered ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <p className="font-pixelate text-sm text-green-400">{description}</p>
//         </div>
//       </div>

//       {/* Binary decorative elements */}
//       <div className="absolute bottom-2 left-2 font-pixelate text-xs text-green-500/40">01</div>
//       <div className="absolute right-2 top-2 font-pixelate text-xs text-green-500/40">10</div>
//     </div>
//   );
// };

// export default TrackCard;


import React, { useState } from 'react';
interface TrackCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  totalPrice: string;
  cashPrice: string;
  isActive: boolean;
  onToggle: () => void;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, description, icon, totalPrice, cashPrice, isActive, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="track-card relative h-56 w-full cursor-pointer rounded-none border border-green-500/30 bg-black/40 p-6 transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]"
      onClick={onToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <div className="mb-4 text-green-500">{icon}</div>
        <h3 className="font-pixelate text-2xl font-bold text-white">{title}</h3>

        {/* Overlay appears on hover OR when active */}
        <div
          className={`description-overlay absolute inset-0 flex flex-col items-center justify-evenly rounded-lg bg-black/90 p-4 backdrop-blur-sm transition-opacity duration-300 ${isHovered || isActive ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <p className="font-pixelate text-xs md:text-sm text-green-400">{description}</p>
          <div className='w-full flex gap-2 items-center justify-center' >
            <p className="font-pixelate text-sm md:text-base text-gray-100 font-bold">Total Price: {totalPrice}</p>
            {cashPrice && (
              <>
                <div className='h-full w-0.5 mx-2 bg-white'></div>
                <p className="font-pixelate text-xs md:text-sm text-green-400">Cash Price: {cashPrice}</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Binary decorative elements */}
      <div className="absolute bottom-2 left-2 font-pixelate text-xs text-green-500/40">01</div>
      <div className="absolute right-2 top-2 font-pixelate text-xs text-green-500/40">10</div>
    </div>
  );
};

export default TrackCard;