/** @format */

'use client';

import { Heading, Text } from '@relume_io/relume-ui';

type Props = {
	slot1: string;
	slot2: string;
	video: string;
};

export type Header13SlotProps = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Header13 = (props: Header13SlotProps) => {
	const { slot1, slot2, video } = {
		...props,
	} as Props;
	return (
		<section className='flex min-h-screen h-full items-center justify-between md:justify-start gap-5 xxl:gap-8 flex-col shadow-small rounded-3xl'>
			<div className='hidden md:flex relative w-full  h-[64vh] xxl:h-[80vh] md:flex-0 bg-zinc-950/20 flex-0'>
				<div className=' absolute w-full top-0 left-0 h-full -z-10'>
					<video
						className='object-cover object-center w-full h-[64vh] xxl:h-[80vh] '
						autoPlay
						preload='auto'
						muted
						loop>
						<source
							src={video}
							type='video/mp4'
						/>
						Seu navegador não suporta o vídeo.
					</video>
				</div>
			</div>
			<div className='px-[5%]'>
				<div className='container'>
					<div className='grid grid-rows-1 mt-60 md:mt-0 items-start gap-2 pb-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16 '>
						<div>
							<Heading className='text-3xl md:text-5xl xl:text-6xl font-bold capitalize'>
								{slot1}
							</Heading>
						</div>
						<div>
							<Text>{slot2}</Text>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
