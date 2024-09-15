/** @format */

import { Gallery21 } from '@/components/ui/Gallery21';
import { Header64 } from '@/components/ui/Header64';
import React from 'react';

export default function Page() {
	return (
		<main className='min-h-screen h-full w-full'>
			<div className='mt-60'>
				<Header64 />
			</div>
			<Gallery21 />
		</main>
	);
}
