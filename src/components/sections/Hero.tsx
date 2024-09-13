/** @format */

import React from 'react';
import { Header81 } from '../ui/Header81';
import { ContentHero } from '@/lib/hygraph/types/homepage-types';

export default function Hero(props: ContentHero) {
	return (
		<>
			<Header81
				heading={props.headline}
				description={props.subheadline}
				button={props.herocta}
				image={props.heroimage.url}
			/>
		</>
	);
}
