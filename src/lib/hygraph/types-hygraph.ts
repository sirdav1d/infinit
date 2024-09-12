/** @format */

import { RichTextContent } from '@graphcms/rich-text-types';

export type TNotFound = {
	notfounds: ErrorData[];
};

export type ErrorData = {
	headline: string;
	lottiedata: JSON;
};

export type TThanks = {
	thanksPages: ThanksData[];
};

export type ThanksData = {
	headline: string;
	subheadline: string;
	lottiedata: JSON;
};

export type TPolitics = {
	politics: PoliticsData[];
};

export type PoliticsData = {
	politic: HtmlType;
	term: HtmlType;
};

export type HtmlType = {
	raw: RichTextContent;
};

export type ContentHero = {
	headline: string;
	subheadline: string;
	heroimage: HygraphImage;
	herocta: string;
};

export type ContentAbout = {
	sectionabouttagline: string;
	sectionaboutheadline: string;
	sectionaboutimage: HygraphImage;
	sectionaboutsubheadline: string;
	sectionaboutcta: string;
};

export type ContentServices = {
	tagline: string;
	title: string;
	description: string;
	servicelist: HygraphServicesList[];
};

export type HygraphServicesList = {
	id: string;
	icon: HygraphImage;
	title: string;
	description: string;
};

export type Services = {
	servicesection: ContentServices;
};

export type HygraphImage = {
	url: string;
};

export type ContentFeatures = {
	features: HygraphFeatures[];
};

export type TCTA = {
	sectionctaheadline: string;
	sectionctadescription: string;
	sectionctabtn: string;
	sectionctaimage: HygraphImage;
};

export type homepageContent = {
	headline: string;
	subheadline: string;
	heroimage: HygraphImage;
	herocta: string;
	sectionabouttagline: string;
	sectionaboutheadline: string;
	sectionaboutimage: HygraphImage;
	sectionaboutsubheadline: string;
	sectionaboutcta: string;
	servicesection: ContentServices;
	features: HygraphFeatures[];
	sectionctaheadline: string;
	sectionctadescription: string;
	sectionctabtn: string;
	sectionctaimage: HygraphImage;
};

export type THomepage = {
	homepages: homepageContent[];
};

export type HygraphFeatures = {
	id: string;
	image: HygraphImage;
	tagline: string;
	title: string;
	description: string;
};
