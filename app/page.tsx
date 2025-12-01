'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const icons = [
	{ name: 'ReactJS', path: 'react.svg' },
	{ name: 'NextJS', path: 'nextjs.svg' },
	{ name: 'JavaScript', path: 'javascript.svg' },
	{ name: 'TypeScript', path: 'typescript.svg' },
	{ name: 'VueJS', path: 'vuejs.svg' },
	{ name: 'Ruby on Rails', path: 'rubyonrails.svg' },
	{ name: 'NodeJS', path: 'nodejs.svg' },
	{ name: 'ExpressJS', path: 'expressjs.svg' },
	{ name: 'MongoDB', path: 'mongodb.svg' },
	{ name: 'PostgreSQL', path: 'postgresql.svg' }
]

const f_experience = [
	{ name: 'ReactJS', experience: '8 months', link: 'https://reactjs.org' },
	{ name: 'NextJS', experience: '3 weeks', link: 'https://nextjs.org' },
	{ name: 'JavaScript', experience: '1.7 years', link: 'https://javascript.com' },
	{ name: 'TypeScript', experience: '2 weeks', link: 'https://typescriptlang.org' },
	{ name: 'VueJS', experience: '2 months', link: 'https://vuejs.org' },
	{ name: 'Ruby on Rails', experience: '4 months', link: 'https://rubyonrails.org' },
]

const b_experience = [
	{ name: 'NodeJS', experience: '1 year', link: 'https://nodejs.org' },
	{ name: 'ExpressJS', experience: '1 year', link: 'https://expressjs.com'},
	{ name: 'MongoDB', experience: '7 months', link: 'https://mongodb.com' },
	{ name: 'PostgreSQL', experience: '3 months', link: 'https://www.postgresql.org' }
]

export default function Home() {
	let [expT, setExpT] = useState<string>('Front-end');
	let [fExp, setFexp] = useState<boolean>(true);
	
	function experienceType() {
		setFexp(!fExp);
		if (expT === 'Front-end') {
			setExpT('Back-end')
		} else { setExpT('Front-end') }
	}

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex justify-center items-center h-full">
			<div className="text-center md:text-start space-y-6 max-w-2xl relative mx-4 md:mx-0">
				<motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="text-4xl text-gray-700 dark:text-gray-100 font-bold">
					Name's Kyrin
				</motion.h1>

				<motion.p initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-gray-600 dark:text-gray-400">
					I'm a self-taught web & app developer. I help businesses and individuals turn ideas into real-world web and mobile apps. Sometimes also just for myself as a project.
				</motion.p>

				<motion.h3 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} className="text-2xl text-gray-500">
					<span onClick={experienceType} className="text-golden hover:text-gray-500 underline animate-pulse">{expT}</span> experience
				</motion.h3>

				{fExp ?
				<motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="excon flex flex-wrap justify-start gap-3 mt-6">
					{['ReactJS', 'NextJS', 'JavaScript', 'TypeScript', 'VueJS', 'Ruby on Rails'].map((skill, index) => (
						<motion.div key={skill} initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 + (0.1 * index), duration: 0.5 }}
							onClick={() => { window.open(f_experience.find(s => s.name === skill)?.link, '_blank') }}
							className="Experience px-4 py-3 bg-gray-100 border-gray-700/20 backdrop-blur-sm border bg-opacity-0 rounded-xl text-sm font-medium flex items-center gap-4 hover:border-gray-700/50 transition-colors duration-300 group max-w-[300px]"
						>
							<div className="flex items-center justify-center bg-gray-700/20 w-10 h-10 rounded-lg">
								<img className="w-4 h-4 group-hover:w-6 group-hover:h-6 transition-all duration-300" src={`/assets/${icons.find(icon => icon.name === skill)?.path}`} alt={skill} width={20} height={20} />
							</div>
							<div className="text-left">
								<div className="text-gray-600 dark:text-white text-sm">{skill}</div>
								<div className="text-xs text-gray-500 dark:text-gray-400 break-words w-[200px]">{f_experience.find(s => s.name === skill)?.experience || ''}</div>
							</div>
						</motion.div>
					))}
				</motion.div>
				: 
				<motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="excon flex flex-wrap justify-start gap-3 mt-6">
					{['NodeJS', 'ExpressJS', 'MongoDB', 'PostgreSQL' ].map((skill, index) => (
						<motion.div key={skill} initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 + (0.1 * index), duration: 0.5 }}
							onClick={() => { window.open(b_experience.find(s => s.name === skill)?.link, '_blank') }}
							className="Experience px-4 py-3 bg-gray-100 border-gray-700/20 backdrop-blur-sm border bg-opacity-0 rounded-xl text-sm font-medium flex items-center gap-4 hover:border-gray-700/50 transition-colors duration-300 group max-w-[300px]"
						>
							<div className="flex items-center justify-center bg-gray-700/20 w-10 h-10 rounded-lg">
								<img className="w-4 h-4 group-hover:w-6 group-hover:h-6 transition-all duration-300" src={`/assets/${icons.find(icon => icon.name === skill)?.path}`} alt={skill} width={20} height={20} />
							</div>
							<div className="text-left">
								<div className="text-gray-600 dark:text-white text-sm">{skill}</div>
								<div className="text-xs text-gray-500 dark:text-gray-400 break-words w-[200px]">{b_experience.find(s => s.name === skill)?.experience || ''}</div>
							</div>
						</motion.div>
					))}
				</motion.div>
				}
			</div>
		</motion.div>
	);
}
