/** @format */

import CTA from '@/components/sections/CTA';
import Services from '@/components/sections/Services';
import { Header76 } from '@/components/ui/Header76';
import { Layout396 } from '@/components/ui/Layout396';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import { ProjectsQuery } from '@/lib/hygraph/queries';
import { TProjects } from '@/lib/hygraph/types/projectpage-type';

export default async function page() {
	const req: TProjects = await fetchHygraph(ProjectsQuery);
	const projectContent = req.projectspages[0];
	return (
		<main>
			<Header76
				heading={projectContent.heroheadline}
				description={projectContent.herosubheadline}
				button={projectContent.herocta}
				images={projectContent.heroImages}
			/>
			<Services
				tagline={projectContent.servicesection.tagline}
				title={projectContent.servicesection.title}
				description={projectContent.servicesection.description}
				servicelist={projectContent.servicesection.servicelist}
			/>
			<Layout396
				tagline={projectContent.sectionprojectstagline}
				heading={projectContent.sectionprojectstitle}
				description={projectContent.sectionprojectsdescription}
				featureSections={projectContent.projectslist}
			/>
			<CTA
				sectionctaheadline={projectContent.sectionctaheadline}
				sectionctadescription={projectContent.sectionctasubheadline}
				sectionctabtn={projectContent.sectionctabtn}
				sectionctaimage={{
					url: projectContent.sectionctaimage.url,
				}}
			/>
		</main>
	);
}
