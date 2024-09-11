/** @format */

import React from 'react';
import { Layout192 } from '../ui/Layout192';
import { ContentAbout } from '@/lib/hygraph/types-hygraph';

export default function About(props: ContentAbout) {
	return (
		<>
			<Layout192
				tagline={props.sectionabouttagline}
				heading={props.sectionaboutheadline}
				description={props.sectionaboutsubheadline}
				image={props.sectionaboutimage.url}
				cta={props.sectionaboutcta}
			/>
		</>
	);
}
