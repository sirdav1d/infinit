/** @format */

type Props = {
	heading: string;
	description: string;
};

export type Header64Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Header64 = (props: Header64Props) => {
	const { heading, description } = {
		...props,
	} as Props;
	return (
		<section className='px-[5%] py-16'>
			<div className='container max-w-lg text-center'>
				<h1 className='mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl'>
					{heading}
				</h1>
				<p className='md:text-md'>{description}</p>
			</div>
		</section>
	);
};
