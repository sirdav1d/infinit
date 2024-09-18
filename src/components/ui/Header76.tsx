/** @format */

import { ArrowUpRight } from 'lucide-react';
import { Button } from './button';
import { HeroImage } from '@/lib/hygraph/types/projectpage-type';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	heading: string;
	description: string;
	button: string;
	images: HeroImage[];
};

export type Header76Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Header76 = (props: Header76Props) => {
	const { heading, description, images, button } = {
		...props,
	} as Props;
	return (
		<section className='grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0'>
			<div className='mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end'>
				<h1 className='mb-5 text-4xl font-bold md:mb-6 md:text-7xl lg:text-10xl'>
					{heading}
				</h1>
				<p className='md:text-md'>{description}</p>
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
			<div className='h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0'>
				<div className='grid w-full grid-cols-2 gap-x-4'>
					<div className='-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center'>
						{images.map((image, index) => (
							<div
								key={index}
								className='grid size-full grid-cols-1 gap-4 rounded-md'>
								<div className='relative w-full pt-[120%] rounded-md'>
									<Image
										width={300}
										height={450}
										className='absolute inset-0 size-full object-cover rounded-md'
										src={image.url}
										alt={`Projeto ${index}`}
									/>
								</div>
							</div>
						))}
					</div>
					<div className='grid size-full animate-loop-vertically grid-cols-1 gap-4'>
						{images.map((image, index) => (
							<div
								key={index}
								className='grid size-full grid-cols-1 gap-4 rounded-md'>
								<div className='relative w-full pt-[120%] rounded-md'>
									<Image
										width={300}
										height={450}
										className='absolute inset-0 size-full object-cover rounded-md'
										src={image.url}
										alt={`Projeto ${index}`}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
