'use client';

import styled from 'styled-components';
import dynamic from 'next/dynamic';

import React, { useState } from 'react';
import BinaryText from '@/components/Animations/BinaryText';
import ProjectCard from '@/components/Projects/ProjectCard';
import projectsData from '@/constants/binary.projects.json';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import Image from 'next/image';
import NavLogo from '@public/images/thumbnail.png';
const MaxWidthWrapper = dynamic(() => import('@/hooks/MaxWidthWrapper'));


const Section = styled.section<{ theme: { body: string } }>`
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Projects2025 = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedTrack, setSelectedTrack] = useState<string>('all');
    const [selectedTech, setSelectedTech] = useState<string>('all');

    // Extract unique tracks and tech stacks
    const allTracks = Array.from(
        new Set(projectsData.flatMap((project: any) => project.tracks))
    ).sort();

    const allTechStacks = Array.from(
        new Set(projectsData.flatMap((project: any) => project.techStack))
    ).sort();

    // Filter projects
    const filteredProjects = projectsData.filter((project: any) => {
        const matchesSearch =
            project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tagline.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesTrack = selectedTrack === 'all' || project.tracks.includes(selectedTrack);

        const matchesTech = selectedTech === 'all' || project.techStack.includes(selectedTech);

        return matchesSearch && matchesTrack && matchesTech;
    });

    return (
        <Section id="projects2k25" className="min-h-screen py-10 md:py-12">
            <div className='flex justify-start absolute top-4 left-4'>
                <a href="/">
                    <Image
                        src={NavLogo}
                        // height={auto}
                        // width={12}
                        alt="/"
                        className="px-2 w-24 cursor-pointer"
                    />
                </a>
            </div>
            <MaxWidthWrapper>
                {/* Header */}
                <div className="mb-8">
                    <BinaryText
                        className="font-pixelate text-[2rem] font-bold text-white md:text-[3rem]"
                        reveal
                    >
                        <div className="shad relative w-full overflow-x-hidden pt-5 text-xl sm:hidden">
                            <h2 className="relative mx-0 mb-5 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold uppercase md:w-max md:max-w-max md:pt-0">
                                <span className="flex-none pl-1 font-bold tracking-wider text-green-500 opacity-85">
                                    01.
                                </span>
                                <span className="flex-none pl-2 font-bold tracking-wider text-gray-200 opacity-85">
                                    Projects 2025
                                </span>

                                <div className="item-center flex flex-col justify-center">
                                    <div className="right-full ml-4 mt-[10px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                                </div>
                            </h2>
                        </div>
                        <div className="shad relative hidden w-full overflow-x-hidden pt-5 sm:block">
                            <h2 className="relative mx-0 mb-5 flex max-w-sm flex-row pt-4 text-left font-pixelate font-bold md:w-max md:max-w-max md:pt-0">
                                <span className="flex-none pl-4 font-bold tracking-wider text-green-500 opacity-85">
                                    01.
                                </span>
                                <span className="flex-none pl-4 font-bold tracking-wider text-gray-200 opacity-85">
                                    Projects 2025
                                </span>

                                <div className="item-center flex flex-col justify-center">
                                    <div className="right-full top-[55%] ml-4 mt-[25px] h-[1px] w-[70vh] transform bg-[#1d6339]"></div>
                                </div>
                            </h2>
                        </div>
                    </BinaryText>

                    <p className="mt-0 text-center font-pixelate text-sm text-gray-400 md:text-base">
                        Showcasing {filteredProjects.length} innovative projects from Binary 2025
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Search Bar */}
                    <div className="flex flex-1 justify-center lg:justify-start">
                        <input
                            type="text"
                            placeholder="Search projects, teams, or keywords..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full max-w-2xl rounded-lg border border-green-500/30 bg-black/40 px-4 py-3 font-pixelate text-sm text-white placeholder-gray-500 backdrop-blur-sm transition-all focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                        />
                    </div>

                    {/* Track and Tech Filters */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-end">
                        {/* Track Filter */}
                        <Select value={selectedTrack} onValueChange={setSelectedTrack}>
                            <SelectTrigger className="h-[42px] w-full rounded-lg border border-green-500/30 bg-black/40 px-4 font-pixelate text-sm text-white backdrop-blur-sm transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/50 sm:w-[180px]">
                                <SelectValue placeholder="All Tracks" />
                            </SelectTrigger>
                            <SelectContent className="border-green-500/30 bg-black/95 font-pixelate text-white backdrop-blur-sm">
                                <SelectItem value="all" className="focus:bg-green-900/30 focus:text-green-400">
                                    All Tracks
                                </SelectItem>
                                {allTracks.map((track) => (
                                    <SelectItem
                                        key={track}
                                        value={track}
                                        className="focus:bg-green-900/30 focus:text-green-400"
                                    >
                                        {track}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Tech Stack Filter */}
                        <Select value={selectedTech} onValueChange={setSelectedTech}>
                            <SelectTrigger className="h-[42px] w-full rounded-lg border border-green-500/30 bg-black/40 px-4 font-pixelate text-sm text-white backdrop-blur-sm transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/50 sm:w-[200px]">
                                <SelectValue placeholder="All Technologies" />
                            </SelectTrigger>
                            <SelectContent className="border-green-500/30 bg-black/95 font-pixelate text-white backdrop-blur-sm">
                                <SelectItem value="all" className="focus:bg-green-900/30 focus:text-green-400">
                                    All Technologies
                                </SelectItem>
                                {allTechStacks.map((tech) => (
                                    <SelectItem
                                        key={tech}
                                        value={tech}
                                        className="focus:bg-green-900/30 focus:text-green-400"
                                    >
                                        {tech}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        {/* Clear Filters */}
                        {(searchTerm || selectedTrack !== 'all' || selectedTech !== 'all') && (
                            <Button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedTrack('all');
                                    setSelectedTech('all');
                                }}
                                variant="outline"
                                className="h-[42px] rounded-lg border border-red-500/30 bg-red-900/20 px-4 py-2 font-pixelate text-sm text-red-400 transition-all hover:bg-red-900/30 hover:text-red-300"
                            >
                                Clear Filters
                            </Button>
                        )}
                    </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredProjects.map((project: any, index: number) => (
                            <ProjectCard
                                key={project._id?.$oid || index}
                                teamName={project.teamName}
                                projectName={project.projectName}
                                tagline={project.tagline}
                                techStack={project.techStack}
                                videoLink={project.videoLink}
                                pptLink={project.pptLink}
                                deploymentLink={project.deploymentLink}
                                github={project.github}
                                logo={project.logo}
                                tracks={project.tracks}
                                teamLead={project.teamLead}
                                isBeginnerTeam={project.isBeginnerTeam}
                                isAllGirlsTeam={project.isAllGirlsTeam}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-[400px] flex-col items-center justify-center">
                        <div className="mb-4 font-pixelate text-6xl text-green-500/30">404</div>
                        <p className="font-pixelate text-lg text-gray-400">No projects found</p>
                        <p className="mt-2 font-pixelate text-sm text-gray-500">
                            Try adjusting your filters or search term
                        </p>
                    </div>
                )}

                {/* Stats Footer */}
                <div className="my-12 grid grid-cols-2 gap-4 rounded-xl border border-green-500/30 bg-black/40 p-6 backdrop-blur-sm md:grid-cols-4">
                    <div className="text-center">
                        <div className="font-pixelate text-3xl font-bold text-green-500">
                            {projectsData.length}
                        </div>
                        <div className="mt-1 font-pixelate text-xs text-gray-400">Total Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="font-pixelate text-3xl font-bold text-green-500">{allTracks.length}</div>
                        <div className="mt-1 font-pixelate text-xs text-gray-400">Tracks</div>
                    </div>
                    <div className="text-center">
                        <div className="font-pixelate text-3xl font-bold text-green-500">
                            {allTechStacks.length}
                        </div>
                        <div className="mt-1 font-pixelate text-xs text-gray-400">Technologies</div>
                    </div>
                    <div className="text-center">
                        <div className="font-pixelate text-3xl font-bold text-green-500">
                            {projectsData.filter((p: any) => p.isBeginnerTeam).length}
                        </div>
                        <div className="mt-1 font-pixelate text-xs text-gray-400">Beginner Teams</div>
                    </div>
                </div>
            </MaxWidthWrapper>
            <Footer />
        </Section>
    );
};

export default Projects2025;
