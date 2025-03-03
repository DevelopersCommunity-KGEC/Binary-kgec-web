'use client';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

import { motion } from 'framer-motion';
// import Transition from "@/components/Animations/Animation";

import styled from 'styled-components';
import CommunityPartners from '@/components/CommunityPartners';
const Navbar = dynamic(() => import('@/components/Navbar'));
const MaxWidthWrapper = dynamic(() => import('@/hooks/MaxWidthWrapper'));
const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const HostedBy = dynamic(() => import('@/components/HostedBy'));
const Timeline = dynamic(() => import('@/components/Timeline'));
const Tracks = dynamic(() => import('@/components/Tracks'));
const Prizes = dynamic(() => import('@/components/Prizes'));
const Mentor = dynamic(() => import('@/components/Mentors'));
const Team = dynamic(() => import('@/components/Team'));
const Sponsors = dynamic(() => import('@/components/Sponsors'));
const FAQs = dynamic(() => import('@/components/FAQ'));
const Footer = dynamic(() => import('@/components/Footer'));
const Section = styled.section<{ theme: { body: string } }>`
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Landing = () => {
  const [heroTopRef, heroTopInView] = useInView({
    threshold: 0.5,
    initialInView: true,
  });

  useEffect(() => {
    if (window && performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      window.location.href = '/';
    }
  }, []);

  return (
    <>
      <Section>
        {typeof window !== 'undefined' && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            <Navbar />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          <MaxWidthWrapper>
            {<Hero heroTopRef={heroTopRef} />}
            <About />
            <HostedBy />
            <Timeline />
            <Tracks />
            <Prizes />
            <Mentor />
            {/* <Team/> */}
            <Sponsors />
            <CommunityPartners />
            <FAQs />
          </MaxWidthWrapper>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <Footer />
          </motion.div>{' '}
        </motion.div>
      </Section>
    </>
  );
};

export default Landing;
