/** @format */

'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Button } from '@relume_io/relume-ui';
import type { ButtonProps } from '@relume_io/relume-ui';
import { RxChevronRight } from 'react-icons/rx';

type Timeline = {
	date: string;
	title: string;
	description: string;
};

type Props = {
	tagline: string;
	heading: string;
	description: string;
	timelines: Timeline[];
};

export type Timeline2Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Timeline2 = (props: Timeline2Props) => {
	const { tagline, heading, description, timelines } = {
		...props,
	} as Props;

	return (
		<section className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='relative grid auto-cols-fr grid-cols-1 items-start justify-center gap-6 sm:gap-12 md:grid-cols-2 md:gap-24 lg:gap-32'>
					<div className='relative top-0 z-10 md:sticky md:top-40 md:z-auto md:pr-4'>
						<p className='mb-3 font-semibold md:mb-4 text-red-600'>{tagline}</p>
						<h1 className='mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
							{heading}
						</h1>
						<p className='md:text-md'>{description}</p>
					</div>

					<div className='absolute z-0 flex h-full w-8 flex-col items-center justify-self-start [grid-area:2/1/3/2] md:z-auto md:justify-self-center md:[grid-area:auto]'>
						<div className='absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent' />
						<div className='sticky top-0 mt-0 md:mt-[-8vh] h-[50vh] w-[3px] bg-blue-600' />
						<div className='h-full w-[3px] bg-neutral-lighter' />
						<div className='absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent bg-background-primary' />
						<div className='absolute top-[-8vh] h-[50vh] w-full bg-background-primary' />
					</div>

					<div className='grid auto-cols-fr gap-x-12 gap-y-8 sm:gap-y-12 md:gap-x-20 md:gap-y-20'>
						{timelines.map((timeline, index) => (
							<Timeline
								key={index}
								timeline={timeline}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

const Timeline = ({ timeline }: { timeline: Timeline }) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end center'],
	});
	const backgroundColor = useTransform(
		scrollYProgress,
		[0.99, 1],
		['#ccc', '#2563eb'],
	);

	return (
		<div className='relative'>
			<div className='absolute flex h-full w-8 items-start justify-center md:-ml-24 md:w-24 lg:-ml-32 lg:w-32'>
				<motion.div
					ref={ref}
					className='z-20 mt-9 size-4 rounded-full shadow-[0_0_0_8px_#fff] md:mt-12'
					style={{
						backgroundColor,
					}}
				/>
			</div>
			<div className='ml-12 flex flex-col shadow-medium p-6 md:ml-0 md:p-8 rounded-md'>
				<h2 className='mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl'>
					{timeline.date}
				</h2>
				<h3 className='mb-3 text-xl font-bold md:mb-4 md:text-2xl'>
					{timeline.title}
				</h3>
				<p>{timeline.description}</p>
			</div>
		</div>
	);
};
