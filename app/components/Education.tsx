'use client';

import { motion } from 'framer-motion';

export default function EducationSection() {
	return (
		<section className="py-0 md:py-8 bg-black text-white">
			<div className="max-w-5xl mx-auto px-4 md:px-6">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Education
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* BTech */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
					>
						<h3 className="text-xl font-semibold text-blue-400 mb-2">PES University</h3>
						<p className="text-gray-300 text-sm mb-1">B.Tech in Computer Science and Engineering</p>
						<p className="text-gray-400 text-sm">2022 – 2026</p>
						<p className="text-sm text-green-400 mt-2">CGPA: 8.69</p>
					</motion.div>

					{/* Pre-University */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
					>
						<h3 className="text-xl font-semibold text-purple-400 mb-2">Mount Carmel PU College</h3>
						<p className="text-gray-300 text-sm mb-1">PCME (Physics, Chemistry, Math, Electronics)</p>
						<p className="text-gray-400 text-sm">2020 – 2022</p>
						<p className="text-sm text-green-400 mt-2">Score: 98.5%</p>
					</motion.div>

					{/* High School */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-md border border-gray-800 rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
					>
						<h3 className="text-xl font-semibold text-teal-400 mb-2">New Horizon Public School</h3>
						<p className="text-gray-300 text-sm mb-1">ICSE Board – 10th Grade</p>
						<p className="text-gray-400 text-sm">2020</p>
						<p className="text-sm text-green-400 mt-2">Score: 96%</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
