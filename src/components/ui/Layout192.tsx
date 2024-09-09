/** @format */

import type { ButtonProps } from '@relume_io/relume-ui';
import Image from 'next/image';
import { RxChevronRight } from 'react-icons/rx';
import { Button } from './button';
import Link from 'next/link';

type ImageProps = {
	src: string;
	alt?: string;
};

type Props = {
	tagline: string;
	heading: string;
	description: string;
	image: ImageProps;
};

export type Layout192Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout192 = (props: Layout192Props) => {
	const { tagline, heading, description, image } = {
		...Layout192Defaults,
		...props,
	} as Props;
	return (
		<section
			id='relume'
			className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20'>
					<div className='order-2 md:order-1 relative'>
						<Image
							width={400}
							height={400}
							src={
								'https://img.freepik.com/fotos-gratis/concepcao-de-construcao-de-capacete-de-imagem-em-rolamentos-em-placas-de-madeira-em-estilo-retro_1423-263.jpg?t=st=1725757158~exp=1725760758~hmac=79c5291d8fe2dc41fb61afbdbc5490ea180bf40a42dde84d13f9194e263e197c&w=740'
							}
							className='object-contain size-full rounded-lg'
							alt={image.alt!}
						/>
						<span className='bg-red-600 w-full h-full absolute -top-8 -z-10 -left-8 rounded-lg'></span>
					</div>
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
									Saiba Mais
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Layout192Defaults: Layout192Props = {
	tagline: 'Tagline',
	heading: 'Medium length section heading goes here',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',

	image: {
		src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
		alt: 'Relume placeholder image',
	},
};
