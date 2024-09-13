/** @format */

'use client';

import { HygraphFeatures } from '@/lib/hygraph/types/homepage-types';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
	contents: HygraphFeatures[];
};

export type Layout349Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout349 = (props: Layout349Props) => {
	const { contents } = {
		...props,
	} as Props;

	const [activeSection, setActiveSection] = useState(5);

	const handleScroll = () => {
		const sectionHeight = window.innerHeight;
		const currentScrollPosition = window.scrollY + sectionHeight / 2;
		const currentSection = Math.floor(currentScrollPosition / sectionHeight);
		setActiveSection(currentSection);
		console.log(activeSection);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [activeSection]);

	return (
		<section
			id='relume'
			className='px-[5%]'>
			<div className='container relative grid items-stretch gap-x-12 py-10 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20'>
				<div className='grid grid-cols-1 gap-12 md:block'>
					{contents.map((content) => (
						<div key={content.id}>
							<div className='flex flex-col items-start justify-center md:h-screen'>
								<p className='mb-3 font-semibold md:mb-4 text-red-600'>
									{content.tagline}
								</p>
								<h2 className='rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-7xl capitalize'>
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
							<div
								className={clsx(
									'fixed inset-0 -z-10 bg-zinc-200 transition-all duration-200 ease-linear',
									{
										'opacity-0': activeSection === 6 || activeSection === 8,
										'opacity-100': activeSection !== 6 && activeSection !== 8,
									},
								)}
							/>
						</div>
					))}
				</div>
				<div className=' hidden h-screen md:flex md:flex-col md:items-center md:justify-center sticky top-0'>
					{contents.map((content, index) => (
						<>
							<Image
								width={400}
								height={400}
								key={content.id}
								src={content.image.url}
								className={clsx(
									'absolute w-[440px] h-[400px] object-cover z-50 rounded-md drop-shadow-xl',
									{
										'opacity-100': activeSection === index + 5,
										'opacity-0': activeSection !== index + 5,
									},
								)}
								alt={content.title}
							/>
						</>
					))}
				</div>
			</div>
		</section>
	);
};
