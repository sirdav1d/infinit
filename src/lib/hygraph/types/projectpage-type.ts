/** @format */

export interface TProjects {
	projectspages: Projectspage[];
}

export interface Projectspage {
	heroheadline: string;
	herocta: string;
	herosubheadline: string;
	heroImages: HeroImage[];
	servicesection: Servicesection;
	sectionprojectstagline: string;
	sectionprojectstitle: string;
	sectionprojectsdescription: string;
	projectslist: Projectslist[];
	sectionctaheadline: string;
	sectionctasubheadline: string;
	sectionctabtn: string;
	sectionctaimage: HeroImage;
}

export interface HeroImage {
	id?: string;
	url: string;
}

export interface Servicesection {
	tagline: string;
	title: string;
	description: string;
	servicelist: Servicelist[];
}

export interface Servicelist {
	id: string;
	title: string;
	icon: HeroImage;
	description: string;
}

export interface Projectslist {
	id: string;
	slug: string;
	title: string;
	description: string;
	logo: HeroImage;
	galery: HeroImage[];
}
