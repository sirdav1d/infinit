/** @format */

import { Contact5 } from '@/components/ui/Contact5';
import { Separator } from '@/components/ui/separator';
import { fetchHygraph } from '@/lib/hygraph/fetch-hygraph';
import { ContactQuery } from '@/lib/hygraph/queries';
import { TContact } from '@/lib/hygraph/types/Contactpage-types';
import React from 'react';
import Image from 'next/image';

export default async function CondoCarePage() {
	const resp: TContact = await fetchHygraph(ContactQuery);
	const data = resp.contactpages[0];
	return (
		<>
			<div className='container max-md:px-[5%] pt-10 md:pt-20 h-full w-full'>
				<div className='flex flex-col justify-center items-center gap-5 text-center'>
					<Image
						width={180}
						height={180}
						src={'/logo.jpg'}
						alt={'Logo Infinit Multi Gestão'}
					/>
					<h1 className='mb-3 text-4xl md:text-6xl font-bold xl:text-7xl uppercase'>
						A INFINIT apresenta o CondoCare
					</h1>
					<p className='md:text-base max-w-lg drop-shadow-md text-balance leading-relaxed'>
						A INFINIT apresenta o CondoCare, um serviço criado para condomínios
						que não querem apagar incêndios, mas prevenir problemas, reduzir
						custos e valorizar seu patrimônio. Mais do que visitas técnicas,
						oferecemos cuidado contínuo, olhar profissional e presença ativa
						dentro do condomínio.
					</p>
				</div>
				<div className='grid md:grid-cols-2 gap-10 items-center mt-20'>
					<div className='flex flex-col gap-5 '>
						<span className='font-semibold text-red-600'>
							INFINIT CONDOCARE
						</span>
						<h2 className='text-xl md:text-4xl font-bold '>
							Gestão Inteligente, Inspeção Preventiva e Valorização do
							Condomínio
						</h2>
						<p>
							INFINIT CondoCare é o novo serviço de inspeção técnica,
							acompanhamento operacional e apoio à gestão condominial, criado
							para reduzir custos, prevenir riscos e garantir tranquilidade ao
							síndico e aos moradores. <br />
							<br />
							Com pacotes escalonados, o condomínio escolhe o nível de
							acompanhamento ideal, de acordo com sua complexidade e
							necessidade.
						</p>
					</div>
					<ul className='space-y-2'>
						<li>
							<div className='flex items-center gap-2'>
								<Image
									className=' -z-10 top-0 rotate-45'
									src='/red.png'
									alt='red'
									width={40}
									height={40}
								/>
								<h3 className='md:text-xl font-bold'>RED - Essencial</h3>
							</div>
							<p>Para condomínios que precisam do básico com segurança</p>
						</li>
						<Separator />
						<li>
							<div className='flex items-center gap-2'>
								<Image
									className=' -z-10 top-0 rotate-45'
									src='/blue.png'
									alt='blue'
									width={40}
									height={40}
								/>
								<h3 className=' md:text-xl font-bold'>BLUE - Preventivo</h3>
							</div>
							<p>Para condomínios que buscam prevenção e controle</p>
						</li>
						<Separator />
						<li>
							<div className='flex items-center gap-2'>
								<Image
									className=' -z-10 top-0 rotate-45'
									src='/yellow.png'
									alt='yellow'
									width={40}
									height={40}
								/>
								<h3 className=' md:text-xl font-bold'>YELLOW - Avançado</h3>
							</div>
							<p>Para condomínios que querem eficiência e planejamento</p>
						</li>
						<Separator />
						<li>
							<div className='flex items-center gap-2'>
								<Image
									className=' -z-10 top-0 rotate-45'
									src='/green.png'
									alt='green'
									width={40}
									height={40}
								/>
								<h3 className=' md:text-xl font-bold'>GREEN - Premium</h3>
							</div>
							<p>Gestão completa, presença constante e tranquilidade total</p>
						</li>
					</ul>
				</div>
			</div>
			<Separator className='mt-20 container' />
			<Contact5
				heading={data.sectioncontacheadline}
				description={data.sectioncontactdescription}
				tagline={data.sectioncontacttagline}
				email='faleconosco@infinitmultigestao.com.br'
				phone='+55 (11) 99001-0623'
			/>
		</>
	);
}
