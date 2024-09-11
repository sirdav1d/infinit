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
			className='relative md:h-[300vh]  bg-zinc-100'>
			<div className='static top-0 grid auto-cols-fr grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:sticky lg:h-screen lg:grid-cols-2 lg:gap-y-0 lg:pt-0'>
				<div className=' relative mx-[5%] max-w-md lg:ml-[5vw] lg:mr-20 lg:justify-self-end rounded-lg  p-4 bg-zinc-50/60 backdrop-blur-sm z-50'>
					<h1 className='mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl capitalize'>
						{heading}
					</h1>
					<p className='md:text-base font-medium max-w-xs drop-shadow-md'>
						{description}
					</p>
					<div className='mt-6 flex gap-x-4 md:mt-8'>
						<Button
							variant={'brand'}
							className='text-lg flex gap-2 items-center group '>
							{button}
							<ArrowUpRight
								size={28}
								className='group-hover:rotate-45 transition-all duration-200 ease-in'
							/>
						</Button>
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
				<div className='relative size-full pt-[100%] lg:pt-0 bg-zinc-700 bg-blend-darken'>
					<Image
						width={1400}
						height={800}
						src={image}
						alt={'imagem de obra ilustrativa'}
						className='absolute inset-0 size-full object-cover bg-blend-darken bg-zinc-700'
					/>
				</div>
			</div>
		) : (
			<motion.div
				style={{ width }}
				className='absolute inset-0 left-auto w-auto'>
				<div className='relative size-full pt-[100%] lg:pt-0'>
					<Image
						width={1400}
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
