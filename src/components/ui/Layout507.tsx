/** @format */

'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@relume_io/relume-ui';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { Culture } from '@/lib/hygraph/types/aboutpage-types';

type Tab = {
	value: string;
	trigger: string;
	content: Culture;
};

type Props = {
	tagline: string;
	heading: string;
	description: string;
	defaultValue?: string;
	tabs: Tab[];
};

export type Layout507Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout507 = (props: Layout507Props) => {
	const { tagline, heading, description, defaultValue, tabs } = {
		...props,
	} as Props;

	const [activeTab, setActiveTab] = useState(defaultValue);
	const MotionTabsContent = motion.create(TabsContent);

	return (
		<section className='px-[5%] py-16 md:py-20 '>
			<div className='container'>
				<div className='container mb-12 max-w-lg md:text-center md:mb-18 lg:mb-20'>
					<p className='mb-3 font-semibold md:mb-4 text-red-600'>{tagline}</p>
					<h1 className='mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
						{heading}
					</h1>
					<p className='md:text-base'>{description}</p>
				</div>
				<div className='relative grid auto-cols-fr grid-cols-1 items-stretch gap-x-12  lg:gap-x-0 rounded-lg shadow-medium'>
					<Tabs
						value={activeTab}
						onValueChange={setActiveTab}>
						<TabsList className='flex-col md:flex-row '>
							{tabs.map((tab, index) => (
								<TabsTrigger
									key={index}
									value={tab.value}
									className={`flex w-full items-start justify-start gap-4 whitespace-normal border-0 border-b p-6 text-md font-bold leading-[1.4] duration-0 data-[state=active]:bg-background-primary data-[state=active]:text-text-primary md:items-center md:justify-center md:border-r md:px-8 md:py-6 md:text-xl md:last-of-type:border-r-0 md:data-[state=active]:[border-bottom:1px_solid_#fff] text-zinc-50 data-[state=active]:opacity-90 ${
										index == 0
											? 'bg-red-600 rounded-tl-lg'
											: index == 1
											? 'bg-blue-600'
											: 'bg-yellow-500 rounded-tr-lg'
									} `}>
									{tab.trigger}
								</TabsTrigger>
							))}
						</TabsList>
						<AnimatePresence initial={false}>
							{tabs.map((tab) => (
								<MotionTabsContent
									key={tab.value}
									value={tab.value}
									initial={{ opacity: 0 }}
									animate={{ opacity: activeTab === tab.value ? 1 : 0 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.6, ease: 'easeInOut' }}>
									<FeatureCard tab={tab} />
								</MotionTabsContent>
							))}
						</AnimatePresence>
					</Tabs>
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({ tab }: { tab: Tab }) => {
	return (
		<div className='grid grid-cols-1 gap-y-12 p-6 md:items-center md:gap-x-12 md:p-8 lg:gap-x-20 lg:p-12'>
			<div>
				<Image
					width={40}
					height={40}
					src={tab.content.icon.url}
					className='object-contain mb-5'
					alt={tab.content.title}
				/>
				<h2 className='rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl xl:text-6xl'>
					{tab.content.title}
				</h2>
				<p className='text-sm xl:text-lg'>{tab.content.description}</p>
			</div>
		</div>
	);
};

// export const Layout507Defaults: Layout507Props = {
// 	tagline: 'Tagline',
// 	heading: 'Short heading goes here',
// 	description:
// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
// 	defaultValue: 'tab-1',
// 	tabs: [
// 		{
// 			value: 'tab-1',
// 			trigger: 'Tab one',
// 			content: {
// 				title: 'Medium length section heading goes here',
// 				description:
// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
// 			},
// 		},
// 		{
// 			value: 'tab-2',
// 			trigger: 'Tab two',
// 			content: {
// 				title: 'Medium length section heading goes here',
// 				description:
// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',

// 				image: {
// 					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
// 					alt: 'Relume placeholder image',
// 				},
// 				icon: '',
// 			},
// 		},
// 		{
// 			value: 'tab-3',
// 			trigger: 'Tab three',
// 			content: {
// 				title: 'Medium length section heading goes here',
// 				description:
// 					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',

// 				image: {
// 					src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
// 					alt: 'Relume placeholder image',
// 				},
// 				icon: '',
// 			},
// 		},
// 	],
// };
