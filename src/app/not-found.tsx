/** @format */

import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import React from 'react';
import { TNotFound } from '@/lib/hygraph/types/notfoundpage-types';
import { ErrorQuery } from '@/lib/hygraph/queries';
import dynamic from 'next/dynamic';
const LottieComponent = dynamic(
	() => import('@/components/ui/LottieComponent'),
	{ ssr: false },
);

export default async function NotFound() {
	const resp: TNotFound = await fetchHygraph(ErrorQuery);
	const data = resp.notfounds[0];

	return (
		<section className='max-w-7xl h-screen px-4 xl:px-10 mx-auto w-full flex flex-col justify-center items-center gap-5'>
			<h1 className='text-center font-bold text-4xl xl:text-7xl xl:mt-40'>
				{data.headline}
			</h1>
			<div className='md:scale-75 xl:w-[40%]'>
				<LottieComponent lottie={data.lottiedata}></LottieComponent>
			</div>
		</section>
	);
}
