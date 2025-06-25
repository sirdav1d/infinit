/** @format */

'use client';

import { useState } from 'react';
import { Input, Label, Checkbox, Textarea, Button } from '@relume_io/relume-ui';
import type { ButtonProps } from '@relume_io/relume-ui';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import FormContact from './FormContact';

type Props = {
	tagline: string;
	heading: string;
	description: string;
	email: string;
	phone: string;
	address: string;
	button: ButtonProps;
};

export type Contact5Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Contact5 = (props: Contact5Props) => {
	const { tagline, heading, description, email, phone, address, button } = {
		...Contact5Defaults,
		...props,
	} as Props;

	return (
		<section
			id='contact'
			className='px-[5%] py-16 md:py-20 '>
			<div className='container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16 mt-40'>
				<div>
					<p className='mb-3 font-semibold md:mb-4 text-red-600'>{tagline}</p>
					<div className='rb-6 mb-6 md:mb-8 '>
						<h2 className='rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl'>
							{heading}
						</h2>
						<p className='md:text-base'>{description}</p>
					</div>

					<div className='grid grid-cols-1 gap-4 py-2'>
						<div className='flex items-center gap-4'>
							<BiEnvelope className='size-6 flex-none' />
							<p>{email}</p>
						</div>
						<div className='flex items-center gap-4'>
							<BiPhone className='size-6 flex-none' />
							<p>{phone}</p>
						</div>
						<div className='flex items-center gap-4'>
							<BiPhone className='size-6 flex-none' />
							<p>+55 (11) 2341-8001</p>
						</div>
						
					</div>
				</div>
				<FormContact />
			</div>
		</section>
	);
};

export const Contact5Defaults: Contact5Props = {
	tagline: 'Tagline',
	heading: 'Contact us',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	email: 'hello@relume.io',
	phone: '+1 (555) 000-0000',
	address: '123 Sample St, Sydney NSW 2000 AU',
	button: { title: 'Submit' },
};
