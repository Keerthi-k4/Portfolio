import { useState } from 'react';

const timelineItems = [
	{
		year: '2006 – 2020',
		institution: 'New Horizon Public School',
		description: 'ICSE Board – 10th Grade',
		hoverDetails: [
				'Score : 96%',
				'Topper in Computer Science',
				'Topper in Mathematics']
	},
	{
		year: '2020 - 2022',
		institution: 'Mount Carmel PU College',
		description: 'PCME (Physics, Chemistry, Math, Electronics)',
		hoverDetails: [
				'Score : 98.5%, 8th in College Overall',
				'Topper in Mathematics',
				'Topper in Electronics'
			]	},
	{
		year: '2022 – 2026',
		institution: 'PES University',
		description: 'Computer Science and Engineering',
		hoverDetails: [
				'1x CRN Award',
				'1x MRD Award',
				'4x DA Scholarship Award'
			]
	}
];

export default function EducationTimeline() {
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

	// Define exact positions for circles to match the curve
	const circlePositions = [
		{ x: 150, y: 280 }, // First circle position
		{ x: 500, y: 200 }, // Second circle (higher)
		{ x: 850, y: 220 }  // Third circle position
	];

	return (
			<div className="max-w-5xl mx-auto">
				<br />
				<h2 className="text-center text-4xl font-bold mb-8 text-white">Education</h2>

				<div className="relative w-[1000px] h-[500px] mx-auto">
					{/* Curved SVG Line */}
					<svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M 150 280 Q 350 150, 500 200 Q 650 250, 850 220"
							stroke="white"
							strokeWidth="3"
							fill="none"
							className="drop-shadow-sm"
						/>
						{/* Add dots along the path for visual enhancement */}
						{circlePositions.map((pos, idx) => (
							<circle
								key={idx}
								cx={pos.x}
								cy={pos.y}
								r="2"
								fill="white"
								className="opacity-60"
							/>
						))}
					</svg>

					{/* Circles & Content */}
					{timelineItems.map((item, idx) => {
						const position = circlePositions[idx];
						const isEven = idx % 2 === 0;
						
						return (
							<div 
								key={idx} 
								className="absolute transform -translate-x-1/2 -translate-y-1/2"
								style={{ 
									left: `${position.x}px`, 
									top: `${position.y}px` 
								}}
							>
								{/* Text content positioned above or below */}
								<div className={`absolute w-64 text-center ${
									isEven ? '-top-20' : 'top-20'
								} left-1/2 transform -translate-x-1/2`}>
									<p className="text-lg font-semibold text-white mb-1">{item.institution}</p>
									<p className="text-sm text-white/80 mb-2">{item.description}</p>
									<p className="text-sm font-medium text-teal-400">{item.year}</p>
								</div>

								{/* Circle */}
								<div
									onMouseEnter={() => setHoveredIdx(idx)}
									onMouseLeave={() => setHoveredIdx(null)}
									className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/60 shadow-lg hover:scale-110 hover:bg-white/30 transition-all duration-300 cursor-pointer relative z-10"
								>
									<div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center">
										<span className="text-white font-bold text-sm">{idx + 1}</span>
									</div>
								</div>

								{/* Hover Popup */}
								{hoveredIdx === idx && (
									<div className={`absolute ${
										isEven ? 'top-20' : '-top-20'
									} left-1/2 transform -translate-x-1/2 bg-white/10 text-white text-sm backdrop-blur-md border border-white/30 p-4 rounded-xl shadow-xl z-50 min-w-max`}>
										<div className="text-center">
											<p className="font-semibold mb-2 text-teal-300">Achievements:</p>
											<ul className="space-y-1">
												{item.hoverDetails.map((detail, i) => (
													<li key={i} className="flex items-center">
														<span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
														{detail}
													</li>
												))}
											</ul>
										</div>
										{/* Arrow pointing to circle */}
										<div className={`absolute left-1/2 transform -translate-x-1/2 ${
											isEven ? '-top-2' : '-bottom-2'
										} w-0 h-0 border-l-4 border-r-4 border-transparent ${
											isEven ? 'border-b-4 border-b-white/10' : 'border-t-4 border-t-white/10'
										}`}></div>
									</div>
								)}
							</div>
						);
					})}

					{/* Decorative stars */}
					<div className="absolute top-4 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
					<div className="absolute top-16 right-32 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
					<div className="absolute bottom-12 left-32 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
					<div className="absolute top-8 right-16 w-1.5 h-1.5 bg-white rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
				</div>
			</div>
	);
}