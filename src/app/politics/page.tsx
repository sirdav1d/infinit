/** @format */

import React from 'react';
import { PoliticsQuery } from '@/lib/hygraph/queries';
import { TPolitics } from '@/lib/hygraph/types-hygraph';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import { RichText } from '@graphcms/rich-text-react-renderer';

export default async function Politics() {
	const resp: TPolitics = await fetchHygraph(PoliticsQuery);
	const data = resp.politics[0];
	return (
		<section className='max-w-xl mx-auto flex flex-col gap-10 px-4 md:px-10'>
			<div className='md:mt-44 mt-12'>
				<RichText content={data.politic.raw}></RichText>
			</div>
			<div>
				<RichText content={data.term.raw}></RichText>
			</div>
		</section>
	);
}
