/** @format */

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
	id?: string;
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
