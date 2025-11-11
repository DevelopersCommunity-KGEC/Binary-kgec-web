import React, { useState } from 'react';
import { FaGithub, FaYoutube, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  teamName: string;
  projectName: string;
  tagline: string;
  techStack: string[];
  videoLink?: string;
  pptLink?: string;
  deploymentLink?: string;
  github?: string;
  logo?: string;
  tracks: string[];
  teamLead: string;
  isBeginnerTeam: boolean;
  isAllGirlsTeam: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  teamName,
  projectName,
  tagline,
  techStack,
  videoLink,
  pptLink,
  deploymentLink,
  github,
  logo,
  tracks,
  teamLead,
  isBeginnerTeam,
  isAllGirlsTeam,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full w-full cursor-pointer rounded-xl border border-green-500/30 bg-black/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header Section */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          {logo && (
            <img
              src={logo}
              alt={`${teamName} logo`}
              className="mb-3 h-16 w-16 rounded-lg border border-green-500/30 object-contain"
            />
          )}
          <h3 className="mb-1 font-pixelate text-xl font-bold text-white">{projectName}</h3>
          <p className="font-pixelate text-sm text-green-400">{teamName}</p>
          <p className="mt-1 font-pixelate text-xs text-gray-400">by {teamLead}</p>
        </div>

        {/* Badges */}
        <div className="flex flex-col gap-2">
          {isBeginnerTeam && (
            <span className="rounded-md bg-blue-500/20 px-2 py-1 font-pixelate text-xs text-blue-400">
              Beginner
            </span>
          )}
          {isAllGirlsTeam && (
            <span className="rounded-md bg-pink-500/20 px-2 py-1 font-pixelate text-xs text-pink-400">
              All Girls
            </span>
          )}
        </div>
      </div>

      {/* Tagline */}
      <p className="mb-4 font-pixelate text-sm text-gray-300 line-clamp-2">{tagline}</p>

      {/* Tracks */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tracks.map((track, idx) => (
          <span
            key={idx}
            className="rounded-md border border-green-500/30 bg-green-900/20 px-2 py-1 font-pixelate text-xs text-green-400"
          >
            {track}
          </span>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mb-4">
        <p className="mb-2 font-pixelate text-xs text-gray-400">Tech Stack:</p>
        <div className="flex flex-wrap gap-2">
          {techStack.slice(0, isExpanded ? techStack.length : 5).map((tech, idx) => (
            <span
              key={idx}
              className="rounded bg-gray-800/50 px-2 py-1 font-pixelate text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
          {!isExpanded && techStack.length > 5 && techStack.length - 5 >= 2 && (
            <span className="rounded bg-gray-800/50 px-2 py-1 font-pixelate text-xs text-gray-400">
              +{techStack.length - 5} more
            </span>
          )}
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-4 flex flex-wrap gap-3 border-t border-green-500/20 pt-4">
        {deploymentLink && (
          <a
            href={deploymentLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 rounded-md bg-green-900/20 px-3 py-2 font-pixelate text-xs text-green-400 transition-all hover:bg-green-900/30"
          >
            <FaExternalLinkAlt size={16} />
            Live
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 rounded-md bg-gray-800/50 px-3 py-2 font-pixelate text-xs text-white transition-all hover:bg-gray-700/50 hover:text-green-400"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        )}
        {videoLink && videoLink !== 'NA' && (
          <a
            href={videoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 rounded-md bg-red-900/20 px-3 py-2 font-pixelate text-xs text-red-400 transition-all hover:bg-red-900/30"
          >
            <FaYoutube size={16} />
            Video
          </a>
        )}
        {pptLink && (
          <a
            href={pptLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 rounded-md bg-blue-900/20 px-3 py-2 font-pixelate text-xs text-blue-400 transition-all hover:bg-blue-900/30"
          >
            <FaFileAlt size={16} />
            PPT
          </a>
        )}
      </div>

      {/* Binary decorative elements */}
      <div className="absolute bottom-2 left-2 font-pixelate text-xs text-green-500/40">01</div>
      <div className="absolute right-2 top-2 font-pixelate text-xs text-green-500/40">10</div>

      {/* Expand indicator */}
      {techStack.length > 5 && (
        <div className="mt-2 text-center font-pixelate text-xs text-gray-500">
          {isExpanded ? '▲ Click to collapse' : '▼ Click to expand'}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
