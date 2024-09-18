/** @format */

import { ArrowUpRight } from 'lucide-react';
import { Button } from './button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	heading: string;
	description: string;
	cta: string;
	image: string;
};

export type Cta9Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Cta9 = (props: Cta9Props) => {
	const { heading, description, cta, image } = {
		...props,
	} as Props;
	return (
		<section
			id='relume'
			className='relative px-4 xl:px-10 py-16 md:py-24 lg:py-28'>
			<div className='container flex w-full flex-col items-center justify-center gap-5 text-center'>
				<div className='md:mr-12 lg:mr-0'>
					<div className='w-full max-w-lg drop-shadow-sm'>
						<h2 className='mb-3 text-4xl capitalize font-bold leading-[1.2] text-text-alternative md:mb-4 md:text-5xl lg:text-8xl'>
							{heading}
						</h2>
						<p className='text-text-alternative font-medium  md:text-base xl:text-lg max-w-lg mx-auto'>
							{description}
						</p>
					</div>
				</div>
				<div className='flex items-start justify-start gap-4 mt-5'>
					<Link
						prefetch
						href={'/contact#contact'}>
						<Button
							variant={'brand'}
							className='text-lg flex gap-2 items-center group '>
							Solicitar Contato
							<ArrowUpRight
								size={28}
								className='group-hover:rotate-45 transition-all duration-200 ease-in'
							/>
						</Button>
					</Link>
				</div>
			</div>
			<div className='absolute inset-0 -z-10 bg-fixed'>
				<Image
					width={1440}
					height={770}
					src={image}
					className='size-full object-cover bg-fixed object-bottom'
					alt={heading}
				/>
				<div className='absolute inset-0 bg-zinc-950/70' />
			</div>
		</section>
	);
};
