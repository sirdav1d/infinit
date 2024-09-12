/** @format */

import React from 'react';
import { Cta9 } from '../ui/CTA9';
import { TCTA } from '@/lib/hygraph/types-hygraph';

export default function CTA(props: TCTA) {
	return (
		<section className='text-zinc-50'>
			<Cta9
				heading={props.sectionctaheadline}
				description={props.sectionctadescription}
				image={props.sectionctaimage.url}
				cta={props.sectionctabtn}
			/>
		</section>
	);
}
