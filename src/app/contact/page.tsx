/** @format */

import { Contact5 } from '@/components/ui/Contact5';
import { Header30 } from '@/components/ui/Header30';
import React from 'react';
import { TContact } from '@/lib/hygraph/types/Contactpage-types';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import { ContactQuery } from '@/lib/hygraph/queries';

export default async function page() {
	const resp: TContact = await fetchHygraph(ContactQuery);
	const data = resp.contactpages[0];
	return (
		<main>
			<Header30
				heading={data.headline}
				description={data.subheadline}
				button={data.cta}
				image={{ url: data.image.url }}
			/>
			<Contact5
				heading={data.sectioncontacheadline}
				description={data.sectioncontactdescription}
				tagline={data.sectioncontacttagline}
				email='infinitmultigestao@outlook.com'
				phone='+55 (11) 99001-0623'
				address='Rua Das Roseiras Nº282 - Vila Lucia CEP: 031-44-010 - São Paulo/SP'
			/>
		</main>
	);
}
