/** @format */

import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';

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
			className='px-[5%] py-10 md:py-20'>
			<div className='container'>
				<div className='flex flex-col md:flex-row gap-y-12 relative h-full md:items-center md:gap-x-12 lg:gap-x-20'>
					<div className='order-2 md:order-1 w-full h-full  '>
						<Image
							width={480}
							height={400}
							src={image}
							className='object-contain rounded-lg lg:absolute top-0 z-10 w-full md:w-[480px]'
							alt={'Capacete de construção civil'}
						/>
					</div>

					<div className='order-1 lg:order-2 w-full h-full'>
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
