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
						<h2 className="text-2xl md:text-4xl font-bold text-white">AI/ML Engineer | Software Developer</h2>
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
						className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8"
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
								className={`px-4 py-2 rounded-full border border-${color}-500/30 bg-${color}-500/10 text-${color}-400 text-sm font-medium shadow-md ring-1 ring-${color}-500/20`}
							>
								{text}
							</motion.span>
						))}
					</motion.div>
				</motion.div>

				{/* Tech Cards */}
				<div className="w-full max-w-5xl px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{/* Frontend/Backend */}
							{[
								{
									id: 'frontend',
									title: 'Development',
									color: 'blue',
									items: ['Python, C++, Java', 'React, Node.js', 'FastAPI, Flask', 'SQL, NoSQL', 'Docker, Redis'],
								},
								{
									id: 'backend',
									title: 'AI / ML',
									color: 'purple',
									items: ['Scikit-learn, NumPy', 'Transformers (HF)', 'Vector Search (FAISS)', 'RAG & Multimodal', 'Prompt Engineering'],
								},
								{
									id: 'devops',
									title: 'Tools & Infra',
									color: 'teal',
									items: ['Git, GitHub/GitLab', 'Firebase, GCP, AWS', 'Postman, Swagger', 'Jira, Notion', 'Docker, Redis'],
								},
							].map(({ id, title, color, items }) => (
								<motion.div
									key={id}
									onMouseEnter={() => setSelectedStack(id as typeof selectedStack)}
									onMouseLeave={() => setSelectedStack(null)}
									whileHover={{ scale: 1.03 }}
									transition={{ type: 'spring', stiffness: 200, damping: 15 }}
									className={`p-4 rounded-lg border-2 transition-all ${
										selectedStack === id
											? `bg-${color}-500/20 border-${color}-500/50`
											: 'bg-gray-800/50 hover:bg-gray-800/70 border-transparent'
									}`}
								>
									<h3 className={`text-lg font-semibold mb-3 text-${color}-400`}>{title}</h3>
									<ul className="text-sm text-gray-300 space-y-2">
										{items.map((item) => (
											<li key={item} className="flex items-center gap-2">
												<div className={`w-1.5 h-1.5 rounded-full bg-${color}-500`} />
												{item}
											</li>
										))}
									</ul>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			
			</div>
		</section>
	);
}
