/** @format */

import { HygraphImage } from '@/lib/hygraph/types/homepage-types';
import { Button } from './button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	heading: string;
	description: string;
	button: string;
	image: HygraphImage;
};

export type Header30Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Header30 = (props: Header30Props) => {
	const { heading, description, button, image } = {
		...props,
	} as Props;
	return (
		<section
			id='relume'
			className='relative px-[5%]'>
			<div className='container'>
				<div className='flex max-h-[60rem] min-h-svh items-center justify-center py-16 text-center md:py-24 lg:py-28'>
					<div className='w-full max-w-lg text-center flex flex-col justify-center items-center'>
						<h1 className='mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl'>
							{heading}
						</h1>
						<p className='text-base text-text-alternative md:text-md'>
							{description}
						</p>
						<div className='mt-6 flex gap-x-4 md:mt-8'>
							<Link
								prefetch
								href={'/contact#contact'}>
								<Button
									variant={'brand'}
									className='text-lg flex gap-2 items-center group '>
									{button}
									<ArrowUpRight
										size={28}
										className='group-hover:rotate-45 transition-all duration-200 ease-in'
									/>
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute inset-0 -z-10'>
				<Image
					width={1440}
					height={770}
					src={image.url}
					className='size-full object-cover object-top'
					alt={heading}
				/>
				<div className='absolute inset-0 bg-black/40' />
			</div>
		</section>
	);
};
