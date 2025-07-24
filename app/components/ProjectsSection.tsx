'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-0 md:py-8">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
				{/* FinSage */}
						<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.02, y: -5 }}
						transition={{ type: 'spring', stiffness: 200, damping: 15 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 
									transition-shadow transition-colors duration-300 
									hover:shadow-xl hover:border-gray-700"
						>

						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="space-y-6">
								<div>
								<h3 className="text-2xl font-bold mb-4">FinSage – AI-Powered Finance Assistant</h3>
								<p className="text-gray-400">
									A full-stack personal finance platform that provides smart spending insights, predictive budget forecasting, AI-powered categorization, goal tracking, OCR-based receipt logging, and a chat assistant for natural language queries.
								</p>
								</div>

								<div className="grid grid-cols-2 gap-6">
								<div>
									<h4 className="text-sm font-semibold text-blue-400 mb-3">User Experience & Features</h4>
									<ul className="space-y-2 text-sm text-gray-400">
									<li>• Real-time Spending Dashboard with category breakdowns</li>
									<li>• Responsive Web UI built with React and Tailwind CSS</li>
									<li>• Secure OAuth 2.0 Login for authentication and Gmail parsing</li>
									<li>• Visual Summaries of spending patterns using Recharts</li>
									</ul>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend & AI Intelligence</h4>
									<ul className="space-y-2 text-sm text-gray-400">
									<li>• FastAPI + PostgreSQL for scalable APIs</li>
									<li>• Dockerized Backend & ML Services for modular deployment</li>
									<li>• Smart Expense Categorization using LLM prompts</li>
									<li>• Chatbot Assistant for expense queries</li>
									<li>• Spending Forecasts using time series models</li>
									</ul>
								</div>
								</div>

								<div className="space-y-3">
								<h4 className="text-sm font-semibold text-teal-400">Key Features</h4>
								<ul className="space-y-2 text-sm text-gray-400">
									<li>• Gmail-based parser for auto-logging bank transactions</li>
									<li>• Receipt OCR using Tesseract for extracting expense details</li>
									<li>• AI Chatbot for natural language queries like “What did I spend on food last week?”</li>
								</ul>
								</div>
							</div>

							<div className="bg-black/30 rounded-xl p-6">
								<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
								<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
								<svg className="w-full h-full" viewBox="0 0 600 500">
									{/* React Frontend */}
									<g>
									<rect x="150" y="20" width="300" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
									<text x="300" y="45" textAnchor="middle" className="fill-gray-300 text-[12px]">
										React + Tailwind (Web Dashboard)
									</text>
									</g>

									{/* FastAPI Backend */}
									<g>
									<rect x="180" y="90" width="240" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
									<text x="300" y="115" textAnchor="middle" className="fill-gray-300 text-[12px]">
										FastAPI Backend (Dockerized)
									</text>
									</g>

									{/* ML Microservice */}
									<g>
									<rect x="40" y="180" width="220" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
									<text x="150" y="205" textAnchor="middle" className="fill-gray-300 text-[12px]">
										Expense Categorizer + Mistral (Docker)
									</text>
									</g>

									{/* PostgreSQL DB */}
									<g>
									<rect x="340" y="180" width="220" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
									<text x="450" y="205" textAnchor="middle" className="fill-gray-300 text-[12px]">
										PostgreSQL Database
									</text>
									</g>

									{/* Google OAuth */}
									<g>
									<rect x="340" y="250" width="220" height="40" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
									<text x="450" y="275" textAnchor="middle" className="fill-gray-300 text-[12px]">
										Google OAuth 2.0 (Login Auth)
									</text>
									</g>

									{/* Gmail Parser */}
									<g>
									<rect x="340" y="320" width="220" height="40" rx="4" className="fill-yellow-500/20 stroke-yellow-500" strokeWidth="1" />
									<text x="450" y="345" textAnchor="middle" className="fill-gray-300 text-[12px]">
										Gmail Parser (Bank Emails)
									</text>
									</g>

									{/* Lines */}
									<g className="stroke-gray-600" strokeWidth="1">
									{/* React -> FastAPI */}
									<line x1="300" y1="60" x2="300" y2="90" />

									{/* FastAPI to ML & DB */}
									<line x1="300" y1="130" x2="150" y2="180" />
									<line x1="300" y1="130" x2="450" y2="180" />

									{/* DB to OAuth to Gmail Parser */}
									<line x1="450" y1="220" x2="450" y2="250" />
									<line x1="450" y1="290" x2="450" y2="320" />
									</g>
								</svg>
								</div>

							</div>
							</div>
						</div>
						</motion.div>
					{/* PDF */}
						<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.02, y: -5 }}
						transition={{ type: 'spring', stiffness: 200, damping: 15 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 
									transition-shadow transition-colors duration-300 
									hover:shadow-xl hover:border-gray-700"
						>
							<div className="p-8">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<div className="space-y-6">
										<div>
											<h3 className="text-2xl font-bold mb-4">Multimodal PDF Q&A System</h3>
											<p className="text-gray-400">
												A scalable Retrieval-Augmented Generation (RAG) system integrating text and image understanding for accurate question answering over documents. Built using Sentence-BERT, CLIP, FAISS, and LLaMA with an agentic reasoning pipeline.
											</p>
										</div>

										<div className="grid grid-cols-2 gap-6">
											<div>
												<h4 className="text-sm font-semibold text-blue-400 mb-3">Core Capabilities</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• Multimodal Embedding via SBERT & CLIP</li>
													<li>• Hybrid Retrieval (FAISS + BM25)</li>
													<li>• Agentic Workflow & Planner Agent</li>
													<li>• Web Search Agent (Tavily API)</li>
												</ul>
											</div>
											<div>
												<h4 className="text-sm font-semibold text-purple-400 mb-3">Model & Fine-tuning</h4>
												<ul className="space-y-2 text-sm text-gray-400">
													<li>• LLaMA 3.2B for response generation</li>
													<li>• LoRA fine-tuning on HotpotQA</li>
													<li>• Contextual late fusion of image/text</li>
													<li>• Memory Agent for session tracking</li>
												</ul>
											</div>
										</div>

										<div className="space-y-3">
											<h4 className="text-sm font-semibold text-teal-400">Key Outcomes</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Reduced LLaMA 3.2B to 1.2B boosting speed for real-time QA</li>
												<li>• LoRA boosted EM to 8% and F1 to 79%</li>
												<li>• Modular architecture, production-ready</li>
											</ul>
										</div>
									</div>

									<div className="bg-black/30 rounded-xl p-6">
										<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
										<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
											{/* Insert custom SVG or diagram export from Excalidraw/Figma */}
											<svg className="w-full h-full" viewBox="0 0 400 320">
												{/* Input Layer */}
												<g>
													<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="200" y="45" textAnchor="middle" className="fill-gray-400 text-[12px]">
														User Query + PDF Upload
													</text>
												</g>

												{/* Embedding Layer */}
												<g>
													<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="105" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">SBERT Text Encoder</text>
													<text x="295" y="105" textAnchor="middle" className="fill-gray-400 text-[12px]">CLIP Image Encoder</text>
												</g>

												{/* Retrieval Layer */}
												<g>
													<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
													<text x="200" y="160" textAnchor="middle" className="fill-gray-400 text-[12px]">
														FAISS + BM25 Hybrid Retrieval
													</text>
												</g>

												{/* Agentic Pipeline */}
												<g>
													<rect x="20" y="190" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
													<text x="200" y="215" textAnchor="middle" className="fill-gray-400 text-[12px]">
														Planner • Retriever • Reasoning • Memory • Web Agents
													</text>
												</g>

												{/* LLM & Output */}
												<g>
													<rect x="20" y="250" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
													<text x="200" y="275" textAnchor="middle" className="fill-gray-400 text-[12px]">
														LLaMA 3.2B → Final Answer Generation
													</text>
												</g>

												{/* Connections */}
												<g className="stroke-gray-600" strokeWidth="1">
													<line x1="200" y1="60" x2="200" y2="80" />
													<line x1="105" y1="120" x2="105" y2="140" />
													<line x1="295" y1="120" x2="295" y2="140" />
													<line x1="200" y1="170" x2="200" y2="190" />
													<line x1="200" y1="230" x2="200" y2="250" />
												</g>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					{/* Just Another Task Distributer */}
						<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.02, y: -5 }}
						transition={{ type: 'spring', stiffness: 200, damping: 15 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 
									transition-shadow transition-colors duration-300 
									hover:shadow-xl hover:border-gray-700"
						>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Yet Another Task Distributor</h3>
										<p className="text-gray-400">
											A fault-tolerant distributed task queue system for real-time emergency response across medical, fire, and police services. Built using Python, Kafka, and Redis, it guarantees exactly-once execution, intelligent task routing, and dynamic worker orchestration. Designed for high-urgency workloads with features like heartbeat monitoring, structured logging, and real-time status tracking.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Client-Side Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Unique Task ID generation</li>
												<li>• Redis-backed task registry for fast status lookup and persistent tracking</li>
												<li>• Real-time result querying</li>
												<li>• Simulated emergency call generator for testing real-world load scenarios</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Worker-Side Support</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Kafka consumer groups for balanced task distribution</li>
												<li>• Heartbeat-based worker monitoring</li>
												<li>• Structured status updates (queued, processing, success, failure)</li>
												<li>• Smart auto-retries on failure</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">System Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Supports exactly-once task execution guarantees</li>
											<li>• Redis-based low-latency result caching</li>
											<li>• Autoscaling with dynamic load redistribution</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Architecture Overview</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<svg className="w-full h-full" viewBox="0 0 400 320">
											{/* Client Input */}
											<rect x="20" y="20" width="360" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
											<text x="200" y="40" textAnchor="middle" className="fill-gray-300 text-[12px]">Client Request + Task ID</text>

											{/* Kafka Queue */}
											<rect x="100" y="70" width="200" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
											<text x="200" y="90" textAnchor="middle" className="fill-gray-300 text-[12px]">Apache Kafka Queue</text>

											{/* Workers */}
											<rect x="30" y="130" width="100" height="30" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
											<rect x="150" y="130" width="100" height="30" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
											<rect x="270" y="130" width="100" height="30" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
											<text x="80" y="150" textAnchor="middle" className="fill-gray-300 text-[11px]">Worker 1</text>
											<text x="200" y="150" textAnchor="middle" className="fill-gray-300 text-[11px]">Worker 2</text>
											<text x="320" y="150" textAnchor="middle" className="fill-gray-300 text-[11px]">Worker 3</text>

											{/* Redis Backend */}
											<rect x="100" y="200" width="200" height="30" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
											<text x="200" y="220" textAnchor="middle" className="fill-gray-300 text-[12px]">Redis Result Backend</text>

											{/* Monitoring UI */}
											<rect x="100" y="260" width="200" height="30" rx="4" className="fill-yellow-500/20 stroke-yellow-500" strokeWidth="1" />
											<text x="200" y="280" textAnchor="middle" className="fill-gray-300 text-[12px]">Live Monitoring CLI/Web UI</text>

											{/* Arrows */}
											<g className="stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="50" x2="200" y2="70" />
												<line x1="200" y1="100" x2="80" y2="130" />
												<line x1="200" y1="100" x2="200" y2="130" />
												<line x1="200" y1="100" x2="320" y2="130" />
												<line x1="80" y1="160" x2="200" y2="200" />
												<line x1="200" y1="160" x2="200" y2="200" />
												<line x1="320" y1="160" x2="200" y2="200" />
												<line x1="200" y1="230" x2="200" y2="260" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
					{/* Fitness Diet App */}
						<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						whileHover={{ scale: 1.02, y: -5 }}
						transition={{ type: 'spring', stiffness: 200, damping: 15 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 
									transition-shadow transition-colors duration-300 
									hover:shadow-xl hover:border-gray-700"
						>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Smart Diet & Fitness Planner</h3>
										<p className="text-gray-400">
											A cross-platform app built with Flutter and FastAPI, offering AI-powered meal recommendations based on user activity, food intake, and biometrics. Combines Firebase Auth, Google Calendar integration, and on-device ML to provide automated, privacy-preserving tracking with minimal user input. Backed by a curated Indian and global nutrition database.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-green-400 mb-3">Food Logging</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Google OAuth 2.0–based login</li>
												<li>• ML-based food recognition using MobileNetV2</li>
												<li>• QR code & manual logging</li>
												<li>• Daily calorie & macro tracker</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Smart Recommendations</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Suggests meals based on past logs</li>
												<li>• Adaptive planning based on step/activity data</li>
												<li>• Integrated with Google Calendar for reminders</li>
												<li>• Explainable AI using rule-based & collaborative filtering</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">System Highlights</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Offline-first logging via SQLite, weekly sync to Firestore</li>
											<li>• Modular FastAPI backend with food intelligence APIs</li>
											<li>• MobileNetV2 model for Indian/global dish recognition</li>
											<li>• Real-time feedback & prompts via smartwatch</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<svg className="w-full h-full" viewBox="0 0 500 460">
										{/* Inputs */}
										<rect x="30" y="20" width="180" height="30" rx="4" className="fill-pink-500/20 stroke-pink-500" strokeWidth="1" />
										<text x="120" y="40" textAnchor="middle" className="fill-gray-300 text-[12px]">QR / Image / Text Input</text>

										{/* Local Logging */}
										<rect x="260" y="20" width="200" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
										<text x="360" y="40" textAnchor="middle" className="fill-gray-300 text-[12px]">SQLite Food Logs</text>

										{/* Arrows */}
										<line x1="210" y1="35" x2="260" y2="35" stroke="#6b7280" strokeWidth="1" />

										{/* FastAPI Backend */}
										<rect x="150" y="90" width="200" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
										<text x="250" y="110" textAnchor="middle" className="fill-gray-300 text-[12px]">Recommendation Engine (FastAPI)</text>

										{/* Arrows from local log to backend */}
										<line x1="180" y1="50" x2="180" y2="90" stroke="#6b7280" strokeWidth="1" />
										<line x1="380" y1="50" x2="380" y2="90" stroke="#6b7280" strokeWidth="1" />

										{/* Firestore */}
										<rect x="30" y="160" width="180" height="30" rx="4" className="fill-yellow-500/20 stroke-yellow-500" strokeWidth="1" />
										<text x="120" y="180" textAnchor="middle" className="fill-gray-300 text-[12px]">Weekly Firestore Sync</text>

										{/* ML */}
										<rect x="260" y="160" width="200" height="30" rx="4" className="fill-green-500/20 stroke-green-500" strokeWidth="1" />
										<text x="360" y="180" textAnchor="middle" className="fill-gray-300 text-[12px]">ML Inference (MobileNetV2)</text>

										{/* Backend to storage / ml */}
										<line x1="250" y1="120" x2="120" y2="160" stroke="#6b7280" strokeWidth="1" />
										<line x1="250" y1="120" x2="360" y2="160" stroke="#6b7280" strokeWidth="1" />

										{/* Smartwatch / Calendar */}
										<rect x="150" y="230" width="200" height="30" rx="4" className="fill-red-500/20 stroke-red-500" strokeWidth="1" />
										<text x="250" y="250" textAnchor="middle" className="fill-gray-300 text-[12px]">Smartwatch / Calendar Sync</text>

										{/* Arrows from inference */}
										<line x1="360" y1="190" x2="250" y2="230" stroke="#6b7280" strokeWidth="1" />
									</svg>
								</div>
							</div>
						</div>
					</motion.div>



				</div>
			</div>
		</section>
	);
}
