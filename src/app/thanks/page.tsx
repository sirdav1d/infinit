/** @format */

import React from 'react';
import { TThanks } from '@/lib/hygraph/types-hygraph';
import { ThanksQuery } from '@/lib/hygraph/queries';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import dynamic from 'next/dynamic';
const LottieComponent = dynamic(
	() => import('@/components/ui/LottieComponent'),
	{ ssr: false },
);

export default async function Thanks() {
	const resp: TThanks = await fetchHygraph(ThanksQuery);
	const data = resp.thanksPages[0];
	return (
		<section className=' flex flex-col items-center justify-center max-w-xxl mx-auto h-screen gap-5 px-4 xl:px-10'>
			<h1 className='text-4xl xl:text-7xl font-bold text-center xl:mt-0 capitalize'>
				{data.headline}
			</h1>
			<p className='text-center md:text-lg'>{data.subheadline}</p>
			<div className='xl:w-[40%]'>
				<LottieComponent lottie={data.lottiedata} />
			</div>
		</section>
	);
}
