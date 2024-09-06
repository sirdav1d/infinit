/** @format */

import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Services />
			<Features />
			<CTA />
		</>
	);
}
