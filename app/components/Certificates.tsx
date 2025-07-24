'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const certificates = [
	{
		title: 'Web Design',
		source: 'PESU I/O',
		url: 'https://drive.google.com/file/d/1Xk3Nf3zJAzVAh17P06-94yApW6ONbb9l/view?usp=drive_link',
		color: 'blue',
	},
	{
		title: 'Problem Solving',
		source: 'HackerRank',
		url: 'https://drive.google.com/file/d/1sajV7N7dFRdLo9n1ektSmhqcKnEIFXuQ/view?usp=drive_link',
		color: 'purple',
	},
	{
		title: 'Jira Work Management',
		source: 'Atlassian',
		url: 'https://drive.google.com/file/d/1KEZ09M8OTkD1S6wzYfBT5edyeiHpEROX/view?usp=sharing',
		color: 'teal',
	},
	{
		title: 'Intro To Machine Learning',
		source: 'Kaggle',
		url: 'https://drive.google.com/file/d/1uXTEUUOWKU8QRmjWzyUDSDWMb8gnnuzT/view?usp=drive_link',
		color: 'green',
	},
	{
		title: 'Data Analysis Using Pandas',
		source: 'Coursera',
		url: 'https://drive.google.com/file/d/1Z9rRfs5FX-Liq-2PIaIwbgb7nU8L2gaG/view?usp=drive_link',
		color: 'blue',
	},
];

export default function Certificates() {
	return (
		<section className="py-0 md:py-8 bg-black text-white">
			<div className="max-w-6xl mx-auto px-4 md:px-6">

				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Certificates
				</motion.h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
					{certificates.map((cert, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ scale: 1.05, rotate: -1 }}
							transition={{ duration: 0.3 }}
							className={`bg-gray-900/50 border border-gray-800 rounded-xl p-4 flex flex-col items-start justify-between hover:shadow-md hover:border-${cert.color}-500 transition-all`}
						>
							<div>
								<h3 className={`text-lg font-semibold text-${cert.color}-400 mb-1`}>{cert.title}</h3>
								<p className="text-sm text-gray-400 mb-3">via {cert.source}</p>
							</div>
							<a
								href={cert.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`group inline-flex items-center text-xs px-3 py-1.5 bg-${cert.color}-500/10 border border-${cert.color}-400 text-${cert.color}-300 rounded-full transition-all hover:bg-${cert.color}-500/20 hover:scale-105`}
							>
								View Certificate
								<ArrowUpRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
