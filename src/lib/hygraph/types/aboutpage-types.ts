/** @format */

export type TAbout = {
	aboutpages: Aboutpage[];
};

export interface Aboutpage {
	heroheadline: string;
	herosubheadline: string;
	videohero: HygraphImage;
	herocta: string;
	sectionculturetagline: string;
	sectionculturetitle: string;
	sectionculturedescription: string;
	culturelist: Culture[];
	sectiontimelinetagline: string;
	sectiontimelineheadline: string;
	sectiontimelinesubheadline: string;
	timelinelist: Timeline[];
	sectionctaheadline: string;
	sectionctasubheadline: string;
	sectionctabtn: string;
	sectionctaimage: HygraphImage;
}

export interface HygraphImage {
	url: string;
}

export interface Culture {
	id: string;
	title: string;
	description: string;
	icon: HygraphImage;
}

export interface Timeline {
	id: string;
	title: string;
	description: string;
	date: string;
}

export interface Sectionctaimage {
	url: string;
}
