'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const PROJECTS = [
  {
    title: 'Invicon',
    description: "A website I did as practice to learn how to work with databases in a more complex way using mongoDB. It's an invite system type of website using invite links.",
    tech: ['ReactJS', 'Tailwind CSS', "JavaScript", 'NodeJS', 'MongoDB'],
    link: 'https://github.com/paramethia/invicon',
    site: 'https://invicon.netlify.app'
  },
  {
    title: 'Particles & creatures',
    description: 'A JS practice project to learn about canvas drawing with JS (the background effect you see right now) and integrating a bunch of creatures with the particles. Not functional for mobile yet.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Paramethia/particles-and-creatures',
    site: 'https://particles-and-creatures.vercel.app'
  },
  {
    title: 'Yougra',
    description: "Download YouTube content as audio or video straight to your device by only using the video's URL",
    tech: ['HTML', 'CSS', 'JavaScript', 'NodeJS', 'ExpressJS'],
    link: 'https://github.com/Paramethia/Yougra', 
    site: 'https://yougra.vercel.app'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        const now = Date.now();
        const delta = now - lastUpdateTime;
        setProgress(prev => Math.min(prev + (delta / 5000), 1));
        setLastUpdateTime(now);
        
        if (progress >= 1) {
          setActiveIndex(prev => (prev + 1) % PROJECTS.length);
          setProgress(0);
        }
      }, 100); // Update progress every 100ms for smoothness
      return () => clearInterval(interval);
    }
  }, [isHovered, progress, lastUpdateTime]);

  const handleScroll = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      setActiveIndex(prev => (prev + 1) % PROJECTS.length);
    } else {
      setActiveIndex(prev => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    }
    setProgress(0);
  };

  const goToNext = () => {
    setActiveIndex(prev => (prev + 1) % PROJECTS.length);
  };

  const goToPrev = () => {
    setActiveIndex(prev => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setLastUpdateTime(Date.now());
    document.documentElement.style.setProperty('--animation-play-state', 'paused');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setLastUpdateTime(Date.now());
    document.documentElement.style.setProperty('--animation-play-state', 'running');
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    setLastUpdateTime(Date.now());
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center items-center h-full" onWheel={handleScroll} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-5xl text-gray-700 dark:text-gray-100 font-bold">
          Projects
        </motion.h1>

        <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-xl text-gray-600 dark:text-gray-400">
          Here are some of the projects I've worked on.
        </motion.p>

        <div className="flex items-center gap-4 justify-center md:justify-start">
          <button onClick={goToPrev} className="p-2 text-gray-500 hover:text-eggplant transition-colors" style={{cursor: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {PROJECTS.map((_, index) => (
              <button key={index} onClick={() => handleDotClick(index)} className="relative h-2 w-8 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700" style={{cursor: 'none'}}>
                {index === activeIndex && (
                  <motion.div style={{ width: `${progress * 100}%` }} className="absolute left-0 top-0 h-full bg-eggplant"/>
                )}
              </button>
            ))}
          </div>

          <button onClick={goToNext} className="p-2 text-gray-500 hover:text-eggplant transition-colors" style={{cursor: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="space-y-6">
          <motion.div key={PROJECTS[activeIndex].title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-600/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">{PROJECTS[activeIndex].title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{PROJECTS[activeIndex].description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {PROJECTS[activeIndex].tech.map(tech => (
                <span key={tech} className="px-3 py-1 bg-gray-400 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-400">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href={PROJECTS[activeIndex].site} target="_blank" rel="noopener noreferrer" className="text-sm text-eggplant hover:text-gray-600 transition-colors duration-300" style={{cursor: 'none'}}>
                View site →
              </a>
              <a href={PROJECTS[activeIndex].link} target="_blank" rel="noopener noreferrer" className="text-sm text-eggplant hover:text-gray-600 transition-colors duration-300" style={{cursor: 'none'}}>
                View code →
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
