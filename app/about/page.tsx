'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center items-center h-full">
      <div className="text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-4xl font-bold">
          About Kyrin
        </motion.h1>

        <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-xl text-gray-600 dark:text-gray-400">
          I'm a self-taught full-stack developer passionate about creating clean, efficient, sometimes also unique, and user-friendly web applications.
        </motion.p>

        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className="space-y-6">
           <div className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-2">Me</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am 21 years old from Durban in South Africa. I've always been interested in technology and how things work as they do. When it comes to video games, I'm a huge fan of God of War, minecraft, COD and some other games. I code, do voices, listen to music and a few other things. My favorite artist is XXXTENTACION.
            </p>
          </div>
          <div className="p-6 border border-gray-700/20 rounded-xl backdrop-blur-sm hover:border-gray-700/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-2">Journey as a developer</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I started coding in 2023 around August. I was first introduced to HTML from school, then I became hooked and wanted to learn more. I've been continuously learning and improving my skills in web development. Still doing so right now, actually. I also make applications for mobile (just android for now) and computers.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
} 