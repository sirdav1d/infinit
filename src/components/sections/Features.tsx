/** @format */

import React from 'react';
import { Layout349 } from '../ui/Layout349';
import { ContentFeatures } from '@/lib/hygraph/types/homepage-types';

export default function Features(props: ContentFeatures) {
	return (
		<>
			<Layout349 contents={props.features} />
		</>
	);
}
