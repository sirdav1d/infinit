/** @format */

import { Projectslist } from '@/lib/hygraph/types/projectpage-type';
import Image from 'next/image';
import { Button } from './button';
import Link from 'next/link';

type Props = {
	tagline: string;
	heading: string;
	description: string;
	featureSections: Projectslist[];
};

export type Layout396Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Layout396 = (props: Layout396Props) => {
	const { tagline, heading, description, featureSections } = {
		...props,
	} as Props;
	return (
		<section
			id='relume'
			className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20'>
					<p className='mb-3 font-semibold md:mb-4 text-red-600'>{tagline}</p>
					<h2 className='mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:text-7xl'>
						{heading}
					</h2>
					<p className='md:text-base'>{description}</p>
				</div>
				<div className='grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3'>
					{featureSections.map((feature, index) => (
						<FeatureSection
							key={index}
							{...feature}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

function FeatureSection(featureSection: Projectslist) {
	return (
		<div className='flex flex-col justify-center p-6 md:p-8 rounded-lg shadow-medium'>
			<div>
				<div className='rb-5 mb-5 md:mb-6'>
					<Image
						width={40}
						height={40}
						src={featureSection.logo.url}
						className='size-12'
						alt={featureSection.title}
					/>
				</div>
				<h2 className='mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl'>
					{featureSection.title}
				</h2>
				<p>{featureSection.description}</p>
			</div>
			<div className='mt-5 md:mt-6'>
				<Link
					prefetch={true}
					href={`/projects/${featureSection.slug}`}>
					<Button
						variant={'link'}
						className=' hover:text-red-600 underline transition-all ease-linear duration-200'>
						Saiba mais
					</Button>
				</Link>
			</div>
		</div>
	);
}
