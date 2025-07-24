'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
					<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true }}
					className="text-center mb-8 md:mb-12"
					>
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
						<br />Keerthi K
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">Full Stack Developer</h2>
						<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="text-lg md:text-xl text-gray-400 max-w-full mx-auto"
						>
						Passionate about writing code that matters — blending functionality, scalability, and intelligence.
						</motion.p>
						<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.6 }}
						className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
						>
						Contributor to open-source projects and constantly learning to push the limits of what I can build.
						</motion.p>
					</div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.7 }}
						viewport={{ once: true }}
						className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-8"
					>
						{[
						{ text: 'Python', color: 'blue' },
						{ text: 'React & Node.js', color: 'purple' },
						{ text: 'Flutter', color: 'teal' },
						{ text: 'LLMs', color: 'blue' },
						{ text: 'ML Models', color: 'purple' },
						].map(({ text, color }) => (
						<motion.span
							key={text}
							whileHover={{ scale: 1.05, y: -2 }}
							transition={{ type: 'spring', stiffness: 200, damping: 15 }}
							className={`px-3 md:px-4 py-1.5 md:py-2 bg-${color}-500/10 rounded-full text-${color}-400 text-xs md:text-sm`}
						>
							{text}
						</motion.span>
						))}
					</motion.div>
					</motion.div>


				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<motion.div
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
								whileHover={{ scale: 1.03 }}
								transition={{ type: 'spring', stiffness: 200, damping: 15 }}
								className={`p-4 md:p-6 rounded-lg transition-all border-2 ${
									selectedStack === 'frontend'
									? 'bg-blue-500/20 border-blue-500/50'
									: 'bg-gray-800/50 hover:bg-gray-800/70 border-transparent'
								}`}
								>


								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										JavaScript (React, Node.js)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Python (Flask, FastAPI)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Java (Spring Boot)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										C++ (System Programming & DSA)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										SQL & NoSQL (PostgreSQL, MongoDB, Firebase)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Docker & Redis (Containers & Caching)
									</li>
									
								</ul>
							</motion.div>

							{/* Backend Layer */}
							<motion.div
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
								whileHover={{ scale: 1.03 }}
								transition={{ type: 'spring', stiffness: 200, damping: 15 }}
								className={`p-4 md:p-6 rounded-lg transition-all border-2 ${
									selectedStack === 'backend'
									? 'bg-purple-500/20 border-purple-500/50'
									: 'bg-gray-800/50 hover:bg-gray-800/70 border-transparent'
								}`}
								>

								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400"> AI / ML </h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Python (NumPy, Pandas, Scikit-learn)
									</li>
									
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Hugging Face Transformers (NLP)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										FAISS (Vector search, similarity search)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										RAG Systems & Multimodal AI (Text, image fusion)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Model Evaluation & Prompt Engineering
									</li>
									
								</ul>
							</motion.div>

							{/* DevOps Layer */}
								<motion.div
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
								whileHover={{ scale: 1.03 }}
								transition={{ type: 'spring', stiffness: 200, damping: 15 }}
								className={`p-4 md:p-6 rounded-lg transition-all border-2 ${
									selectedStack === 'devops'
									? 'bg-teal-500/20 border-teal-500/50'
									: 'bg-gray-800/50 hover:bg-gray-800/70 border-transparent'
								}`}
								>

								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">Other Tools & Tech</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Git & GitHub / GitLab (Version Control)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Firebase (Auth, Realtime DB)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Google Cloud Platform (GCP) / AWS (Cloud Services)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Jira & Notion (Project Management)
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Postman & Swagger (API Testing)
									</li>
									
								</ul>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
