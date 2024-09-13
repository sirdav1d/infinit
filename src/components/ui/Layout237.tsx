/** @format */

import { HygraphServicesList } from '@/lib/hygraph/types/homepage-types';
import Image from 'next/image';

type Props = {
	tagline: string;
	heading: string;
	description: string;
	sections: HygraphServicesList[];
};

export type Layout237Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout237 = (props: Layout237Props) => {
	const { tagline, heading, description, sections } = {
		...props,
	} as Props;
	return (
		<section
			id='relume'
			className='px-[5%] py-10 md:py-20'>
			<div className='container flex flex-col items-center'>
				<div className='rb-12 mb-12 md:text-center md:mb-18 lg:mb-20'>
					<div className='w-full max-w-lg'>
						<p className='mb-3 font-semibold md:mb-4 text-red-600'>{tagline}</p>
						<h2 className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
							{heading}
						</h2>
						<p className='md:text-base'>{description}</p>
					</div>
				</div>
				<div className='grid grid-cols-1  w-full lg:items-start lg:justify-center gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
					{sections.map((section) => (
						<div
							key={section.id}
							className='flex w-full flex-col lg:items-center lg:text-center '>
							<div className='rb-5 mb-5 md:mb-6'>
								<Image
									width={60}
									height={60}
									src={section.icon.url}
									className='object-contain'
									alt={section.title}
								/>
							</div>
							<h3 className='mb-5 text-2xl font-bold md:mb-6 md:leading-[1.3] xl:text-3xl'>
								{section.title}
							</h3>
							<p className='max-w-sm'>{section.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
