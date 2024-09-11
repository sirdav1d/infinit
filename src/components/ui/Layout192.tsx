/** @format */

import type { ButtonProps } from '@relume_io/relume-ui';
import Image from 'next/image';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from './button';
import Link from 'next/link';

type Props = {
	tagline: string;
	heading: string;
	description: string;
	image: string;
	cta: string;
};

export type Layout192Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout192 = (props: Layout192Props) => {
	const { tagline, heading, description, image, cta } = {
		...props,
	} as Props;
	return (
		<section
			id='relume'
			className='px-[5%] py-10 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20 relative'>
					<div className='order-2 md:order-1 z-50'>
						<Image
							width={480}
							height={400}
							src={image}
							className='object-contain rounded-lg '
							alt={'Capacete de construção civil'}
						/>
					</div>
					<span className='bg-red-600 w-[348px] h-[348px] -bottom-3 -left-3 absolute md:-top-5 md:-left-5 rounded-lg z-10'></span>
					<div className='order-1 lg:order-2'>
						<p className='mb-3 font-semibold md:mb-4 text-red-600'>{tagline}</p>
						<h2 className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
							{heading}
						</h2>
						<p className='md:text-md'>{description}</p>
						<div className='mt-6 flex gap-x-4 md:mt-8'>
							<Link
								prefetch
								href={'/about'}>
								<Button className='border-2 bg-transparent border-blue-500 hover:bg-blue-600 font-semibold text-blue-600 transition-all ease-linear duration-200 hover:text-zinc-50 text-base'>
									{cta}
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
