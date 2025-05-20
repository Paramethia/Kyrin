'use client';
import { motion } from 'framer-motion';

const ICONS = [
  { name: 'React', path: 'react.svg' },
  { name: 'Next.js', path: 'nextjs.svg' },
  { name: 'JavaScript', path: 'javascript.svg' },
  { name: 'TypeScript', path: 'typescript.svg' },
  { name: 'Vue.js', path: 'vuejs.svg' },
  { name: 'Ruby on Rails', path: 'rubyonrails.svg' }
]

const EXPERIENCE = [
  { name: 'React', experience: '5 months', link: 'https://reactjs.org' },
  { name: 'Next.js', experience: 'About a week', link: 'https://nextjs.org' },
  { name: 'JavaScript', experience: '1 year', link: 'https://javascript.com' },
  { name: 'TypeScript', experience: 'About a week', link: 'https://typescriptlang.com' },
  { name: 'Vue.js', experience: '2 months', link: 'https://vuejs.org' },
  { name: 'Ruby on Rails', experience: '3 weeks', link: 'https://rubyonrails.org.com' },
]

export default function Home() {

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center items-center h-full">
      <div className="text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-4xl font-bold">
          Name's Kyrin
        </motion.h1>

        <motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-gray-600 dark:text-gray-400">
          I'm a self-taught web & app developer. I help businesses and individuals turn ideas into real-world web and mobile apps. Sometimes also just for myself as a project.
        </motion.p>

        <motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-2xl text-golden">
          Experience
        </motion.h3>

        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="excon flex flex-wrap justify-start gap-3 mt-6">
          {['React', 'Next.js', 'JavaScript', 'TypeScript', 'Vue.js', 'Ruby on Rails'].map((skill, index) => (
            <motion.div key={skill} initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (0.1 * index), duration: 0.5 }}
              onClick={() => { window.open(EXPERIENCE.find(s => s.name === skill)?.link, '_blank')}}
              className="Experience px-4 py-3 bg-gray-100 border-gray-700/20 backdrop-blur-sm border bg-opacity-0 rounded-xl text-sm font-medium flex items-center gap-4 hover:border-gray-700/50 transition-colors duration-300 group max-w-[300px]"
            >
              <div className="flex items-center justify-center bg-gray-700/20 w-10 h-10 rounded-lg">
                <img className="w-4 h-4 group-hover:w-6 group-hover:h-6 transition-all duration-300" src={`/assets/${ICONS.find(icon => icon.name === skill)?.path}`} alt={skill} width={20} height={20} />
              </div>
              <div className="text-left">
                <div className="text-white text-sm">{skill}</div>
                <div className="text-xs text-gray-400 break-words w-[200px]">{EXPERIENCE.find(s => s.name === skill)?.experience || ''}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
