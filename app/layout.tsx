import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import CursorTrail from './components/CursorTrail';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Keerthi K - Full-Stack Developer & AI/ML Engineer',
	description:
		'Welcome to my portfolio! I am Keerthi K, a Computer Science student at PES University passionate about full-stack development and artificial intelligence. Explore my projects in React, FastAPI, Kafka, GANs, and more.',
	keywords: [
		'Keerthi K',
		'Full-Stack Developer',
		'AI Engineer',
		'Machine Learning',
		'React',
		'Next.js',
		'FastAPI',
		'Kafka',
		'PostgreSQL',
		'Docker',
		'DevOps',
		'Deep Learning',
		'Big Data',
		'GANs',
		'LangChain',
		'Computer Vision',
		'Natural Language Processing',
	],
	authors: [{ name: 'Keerthi K' }],
	creator: 'Keerthi K',
	openGraph: {
		title: 'Keerthi K - Full-Stack Developer Portfolio',
		description:
			'Explore the portfolio of Keerthi K – Full-Stack Developer and AI/ML enthusiast. Showcasing projects across web development, LLMs, GANs, and scalable systems.',
		url: 'https://portfolio-keerthi-k.vercel.app/',
		siteName: 'Keerthi K - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Keerthi K - Full-Stack Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
				<CursorTrail />
			</body>
		</html>
	);
}
