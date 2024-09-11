/** @format */

import { Layout237 } from '../ui/Layout237';
import { ContentServices } from '@/lib/hygraph/types-hygraph';

export default function Services(props: ContentServices) {
	return (
		<>
			<Layout237
				tagline={props.tagline}
				heading={props.title}
				description={props.description}
				sections={props.servicelist}
			/>
		</>
	);
}
