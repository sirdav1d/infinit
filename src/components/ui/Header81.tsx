/** @format */

'use client';

import { useMediaQuery } from '@relume_io/relume-ui';
import {
	motion,
	MotionValue,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';
import { Button } from './button';
import Link from 'next/link';

type Props = {
	image: string;
	heading: string;
	description: string;
	button: string;
};

export type Header81Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Header81 = (props: Header81Props) => {
	const { heading, description, button, image } = {
		...props,
	} as Props;

	const headerRef = useRef<HTMLDivElement>(null);
	const isMobile = useMediaQuery('(max-width: 991px)');

	const { scrollYProgress } = useScroll({ target: headerRef });
	const smoothScrollYProgress = useSpring(scrollYProgress, {
		stiffness: 300,
		damping: 30,
	});
	const width = useTransform(smoothScrollYProgress, [0, 1], ['50%', '100%']);

	return (
		<section
			ref={headerRef}
			className='relative min-h-screen flex w-full justify-center items-center md:items-start lg:h-[300vh]  bg-zinc-100'>
			<div className='static w-full top-0 grid auto-cols-fr grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:sticky lg:h-screen lg:grid-cols-2 lg:gap-y-0 lg:pt-0'>
				<div className=' relative mx-1 md:mx-[5%] lg:max-w-md lg:ml-[5vw] lg:mr-20 lg:justify-self-end rounded-lg  p-4 bg-zinc-50/60 backdrop-blur-sm z-10'>
					<h1 className='mb-3 text-4xl md:text-6xl font-bold xl:text-7xl capitalize'>
						{heading}
					</h1>
					<p className='md:text-base font-medium lg:max-w-xs drop-shadow-md xl:text-lg'>
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
				<MotionImage
					image={image}
					isMobile={isMobile}
					width={width}
				/>
			</div>
		</section>
	);
};

const MotionImage = ({
	image,
	isMobile,
	width,
}: {
	image: string;
	isMobile: boolean;
	width: MotionValue<string>;
}) => (
	<div>
		{isMobile ? (
			<div className='static w-full'>
				<div className='size-full relative lg:pt-0 h-[348px] mx-auto'>
					<Image
						width={400}
						height={400}
						src={image}
						alt={'imagem de obra ilustrativa'}
						className='size-full object-cover absolute'
					/>
				</div>
			</div>
		) : (
			<motion.div
				style={{ width }}
				className='absolute inset-0 left-auto w-auto'>
				<div className='relative size-full pt-[100%] lg:pt-0'>
					<Image
						width={1440}
						height={900}
						src={image}
						alt={'imagem de obra ilustrativa'}
						className='absolute inset-0 size-full object-cover'
					/>
				</div>
			</motion.div>
		)}
	</div>
);
