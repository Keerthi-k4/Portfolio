'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import EducationSection from './components/Education';
import Certificates from './components/Certificates';	

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<ProjectsSection />
			<EducationSection />
			<Certificates />
			<ContactSection />

		</main>
	);
}
{
	/* 
	web design pesuio
	problem solving hackerrank
	jira atllasian
	machine learning kaggle
	pandas coursera
	*/
}
