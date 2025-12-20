/** @format */

'use client';

import { HygraphFeatures } from '@/lib/hygraph/types/homepage-types';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = {
	contents: HygraphFeatures[];
};

export type Layout349Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

const clamp = (value: number, min: number, max: number) =>
	Math.min(max, Math.max(min, value));

export const Layout349 = (props: Layout349Props) => {
	const { contents = [] } = {
		...props,
	} as Props;

	const containerRef = useRef<HTMLElement | null>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isInView, setIsInView] = useState(false);

	const handleScroll = useCallback(() => {
		const el = containerRef.current;
		if (!el) return;

		const rect = el.getBoundingClientRect();
		const top = rect.top + window.scrollY;
		const bottom = top + rect.height;
		const midpoint = window.scrollY + window.innerHeight / 2;

		setIsInView(midpoint >= top && midpoint <= bottom);

		const rawIndex = Math.floor((midpoint - top) / window.innerHeight);
		const nextIndex = clamp(rawIndex, 0, Math.max(0, contents.length - 1));
		setActiveIndex(nextIndex);
	}, [contents.length]);

	useEffect(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [handleScroll]);

	return (
		<section
			ref={containerRef}
			className='px-[5%]'>
			<div className='container relative grid items-stretch gap-x-12 md:grid-cols-2 md:py-0 lg:gap-x-10'>
				<div
					className={clsx(
						'fixed inset-0 -z-10 bg-zinc-100 transition-opacity duration-200 ease-linear',
						{
							'opacity-0': !isInView,
							'opacity-100': isInView,
						},
					)}
				/>
				<ul className='grid grid-cols-1 md:block'>
					{contents.map((content, index) => (
						<li key={index}>
							<div className='flex flex-col items-start justify-center md:h-screen'>
								<p className='mb-3 font-semibold md:mb-4 text-red-600'>
									{content.tagline}
								</p>
								<h2 className='rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-7xl'>
									{content.title}
								</h2>
								<p className='md:text-base max-w-sm'>{content.description}</p>
								<div className='mt-10 block w-full md:hidden rounded-md'>
									<Image
										width={400}
										height={400}
										src={content.image.url}
										className='w-full object-cover rounded-md'
										alt={content.title}
									/>
								</div>
							</div>
						</li>
					))}
				</ul>
				<section className='sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center'>
					{contents.map((content, index) => (
						<Image
							width={440}
							height={400}
							key={index}
							src={content.image.url}
							className={clsx(
								'absolute h-[400px] w-[440px] object-cover z-50 rounded-md drop-shadow-lg transition-opacity duration-200 ease-linear',
								{
									'opacity-100': activeIndex === index,
									'opacity-0': activeIndex !== index,
								},
							)}
							alt={content.title}
						/>
					))}
				</section>
			</div>
		</section>
	);
};
