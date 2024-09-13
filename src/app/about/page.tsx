/** @format */

import React from 'react';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import { AboutQuery } from '@/lib/hygraph/queries';
import { TAbout } from '@/lib/hygraph/types/aboutpage-types';
import { Header13 } from '@/components/ui/Header13';
import { Layout507 } from '@/components/ui/Layout507';
import { Timeline2 } from '@/components/ui/Timeline2';
import CTA from '@/components/sections/CTA';

export default async function page() {
	const resp: TAbout = await fetchHygraph(AboutQuery);
	const data = resp.aboutpages[0];
	return (
		<main>
			<Header13
				slot1={data.heroheadline}
				slot2={data.herosubheadline}
				video={data.videohero.url}
			/>
			<Layout507 />
			<Timeline2 />
			<CTA
				sectionctaheadline={data.sectionctaheadline}
				sectionctadescription={data.sectionctasubheadline}
				sectionctabtn={data.sectionctabtn}
				sectionctaimage={{
					url: data.sectionctaimage.url,
				}}
			/>
		</main>
	);
}
