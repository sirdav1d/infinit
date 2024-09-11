/** @format */

import About from '@/components/sections/About';
import CTA from '@/components/sections/CTA';
import Features from '@/components/sections/Features';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import { HomepageQuery } from '@/lib/hygraph/queries';
import { THomepage } from '@/lib/hygraph/types-hygraph';

export default async function Home() {
	const resp: THomepage = await fetchHygraph(HomepageQuery);
	const data = resp.homepages[0];
	return (
		<>
			<Hero
				headline={data.headline}
				subheadline={data.subheadline}
				heroimage={{
					url: data.heroimage.url,
				}}
				herocta={data.herocta}
			/>

			<About
				sectionabouttagline={data.sectionabouttagline}
				sectionaboutheadline={data.sectionaboutheadline}
				sectionaboutimage={{
					url: data.sectionaboutimage.url,
				}}
				sectionaboutsubheadline={data.sectionaboutsubheadline}
				sectionaboutcta={data.sectionaboutcta}
			/>

			<Services
				tagline={data.servicesection.tagline}
				title={data.servicesection.title}
				description={data.servicesection.description}
				servicelist={data.servicesection.servicelist}
			/>
			<Features features={data.features} />
			<CTA />
		</>
	);
}
