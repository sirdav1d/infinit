/** @format */

import { Gallery21 } from '@/components/ui/Gallery21';
import { Header64 } from '@/components/ui/Header64';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import { TGallery } from './types';

export default async function Page({ params }: { params: { slug: string } }) {
	const GalleryQuery = `query MyQuery {
  projectspages {
    projectslist(where: {slug: "${params.slug}"}) {
      id
      galery {
        id
        url
      }
      description
      title
    }
  }
}`;

	const resp: TGallery = await fetchHygraph(GalleryQuery);
	const data = resp.projectspages[0].projectslist[0];
	return (
		<main className='min-h-screen h-full w-full'>
			<div className=' md:mt-10'>
				<Header64
					heading={data.title}
					description={data.description}
				/>
			</div>
			<Gallery21
				heading='Galeria De Projetos'
				description='Veja o resultado do nosso comprometimento'
				images={data.galery}
			/>
		</main>
	);
}
