/** @format */

import { HygraphImage } from './homepage-types';

export interface TContact {
	contactpages: Contactpage[];
}

export interface Contactpage {
	cta: string;
	headline: string;
	image: HygraphImage;
	subheadline: string;
	sectioncontacheadline: string;
	sectioncontactdescription: string;
	sectioncontacttagline: string;
}
