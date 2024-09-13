/** @format */

'use client';

import { Heading, Text } from '@relume_io/relume-ui';

type ImageProps = {
	src: string;
	alt?: string;
};

type Props = {
	slot1: string;
	slot2: string;
	video: string;
	image: ImageProps;
};

export type Header13SlotProps = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Header13 = (props: Header13SlotProps) => {
	const { slot1, slot2, video, image } = {
		...Header13SlotDefaults,
		...props,
	} as Props;
	return (
		<section className='flex h-full min-h-screen items-center justify-start gap-5 md:gap-14 flex-col shadow-small rounded-lg'>
			<div className='relative w-full h-[440px]  md:h-[580px] xxl:h-[72vh] flex-0 bg-zinc-950/50'>
				<div className='absolute w-full top-0 left-0 h-full -z-10'>
					<video
						className='object-cover object-center w-full h-[440px]  md:h-[580px] xxl:h-[72vh] '
						autoPlay
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
					<div className='grid grid-rows-1 items-start gap-2 pb-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16 '>
						<div>
							<Heading className='text-3xl md:text-5xl xl:text-7xl font-bold capitalize'>
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

export const Header13SlotDefaults: Header13SlotProps = {
	video: 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
	image: {
		src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg',
		alt: 'Relume placeholder image',
	},
};
