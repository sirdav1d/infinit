/** @format */

import Image from 'next/image';

type ImageProps = {
	src: string;
	alt?: string;
};

type SectionProps = {
	icon: ImageProps;
	heading: string;
	description: string;
};

type Props = {
	tagline: string;
	heading: string;
	description: string;
	sections: SectionProps[];
};

export type Layout237Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout237 = (props: Layout237Props) => {
	const { tagline, heading, description, sections } = {
		...props,
		...Layout237Defaults,
	} as Props;
	return (
		<section
			id='relume'
			className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container flex flex-col items-center'>
				<div className='rb-12 mb-12 text-center md:mb-18 lg:mb-20'>
					<div className='w-full max-w-lg'>
						<p className='mb-3 font-semibold md:mb-4 text-red-600'>{tagline}</p>
						<h2 className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
							{heading}
						</h2>
						<p className='md:text-md'>{description}</p>
					</div>
				</div>
				<div className='grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-16 lg:gap-x-12'>
					{sections.map((section, index) => (
						<div
							key={index}
							className='flex w-full flex-col items-center text-center'>
							<div className='rb-5 mb-5 md:mb-6'>
								<Image
									width={400}
									height={400}
									src={section.icon.src}
									className='size-12'
									alt={section.icon.alt!}
								/>
							</div>
							<h3 className='mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl'>
								{section.heading}
							</h3>
							<p>{section.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export const Layout237Defaults: Layout237Props = {
	sections: [
		{
			icon: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
				alt: 'Relume logo 1',
			},
			heading: 'Medium length',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
		},
		{
			icon: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
				alt: 'Relume logo 2',
			},
			heading: 'Medium length',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
		},
		{
			icon: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
				alt: 'Relume logo 3',
			},
			heading: 'Medium length',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
		},
		{
			icon: {
				src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
				alt: 'Relume logo 4',
			},
			heading: 'Medium lengts',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
		},
	],
};
