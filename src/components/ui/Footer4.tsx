/** @format */

import logo from '@/assets/logo.png';
import Image from 'next/image';
import { BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi';
import { CiLinkedin } from 'react-icons/ci';

type ImageProps = {
	url?: string;
	src: string;
	alt?: string;
};

type Links = {
	title: string;
	url: string;
};

type ColumnLinks = {
	links: Links[];
};

type SocialMediaLinks = {
	url: string;
	icon: React.ReactNode;
};

type FooterLink = {
	title: string;
	url: string;
};

type Props = {
	logo: ImageProps;
	columnLinks: ColumnLinks[];
	socialMediaLinks: SocialMediaLinks[];
	footerText: string;
	footerLinks: FooterLink[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Footer4 = (props: Footer4Props) => {
	const { footerText, columnLinks, footerLinks, socialMediaLinks } = {
		...Footer4Defaults,
		...props,
	} as Props;
	return (
		<footer className='px-4 xl:px-10 py-12 md:py-18'>
			<div className='container'>
				<div className='grid grid-cols-1 items-center justify-start justify-items-center gap-x-[4vw] gap-y-12 pb-12 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4'>
					<div className='flex gap-5 relative flex-col md:items-start md:justify-start items-center justify-center text-center md:text-start'>
						<a
							href={'/'}
							className='lg:justify-self-start'>
							<Image
								width={80}
								height={60}
								src={logo}
								alt={'Logo Infinit Multi Gestão'}
								className='inline-block'
							/>
						</a>
					</div>
					{columnLinks.map((column, index) => (
						<ul
							key={index}
							className='grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start '>
							{column.links.map((link, linkIndex) => (
								<li
									key={linkIndex}
									className='font-semibold'>
									<a
										className='hover:text-blue-600 transition-all ease-linear duration-200'
										href={link.url}>
										{link.title}
									</a>
								</li>
							))}
						</ul>
					))}
					<div className='flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end'>
						{socialMediaLinks.map((link, index) => (
							<a
								className='hover:text-blue-600 transition-all ease-linear duration-200'
								key={index}
								target='_blank'
								href={link.url}>
								{link.icon}
							</a>
						))}
					</div>
				</div>
				<div className='flex flex-col md:flex-row justify-between w-full mx-auto gap-5'>
					<div className='flex flex-col gap-1 '>
						<h3 className='font-semibold text-base'>E-mail:</h3>
						<p className='text-sm'>infinitmultigestao@outlook.com</p>
					</div>
					<div className='flex flex-col gap-1 '>
						<h3 className='font-semibold text-base'>Telefone: </h3>
						<p className='text-sm w-full'>+55 (11) 2341-8001</p>
					</div>
					<div className='flex flex-col gap-1'>
						<h3 className='font-semibold text-base'>WhatsApp:</h3>
						<p className='text-sm'>+55 (11) 99001 0623</p>
					</div>
				</div>
				<div className='h-px w-full bg-zinc-700/30 mt-5' />
				<div className='flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8'>
					<p className='mt-8 md:mt-0 text-center'>{footerText}</p>
					<ul className='grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0'>
						{footerLinks.map((link, index) => (
							<li
								key={index}
								className='underline decoration-black underline-offset-1 '>
								<a
									className='hover:text-blue-600 transition-all ease-linear duration-200'
									href={link.url}>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export const Footer4Defaults: Footer4Props = {
	columnLinks: [
		{
			links: [
				{ title: 'Home', url: '/' },
				{ title: 'Sobre Nós', url: '/about' },
				{ title: 'Projetos', url: '/projects' },
				{ title: 'Contato', url: '/contact' },
			],
		},
	],
	socialMediaLinks: [
		{
			url: 'https://api.whatsapp.com/send?phone=11990010623&text=Ol%C3%A1%2C+estava+navegando+pelo+seu+site+e+preciso+de+ajuda',
			icon: <BiLogoWhatsapp className='size-8' />,
		},
		{
			url: 'https://www.instagram.com/infinitmultigestao/',
			icon: <BiLogoInstagram className='size-8' />,
		},
		{
			url: 'https://www.linkedin.com/in/infint-multi-2b7734322/',
			icon: <CiLinkedin className='size-8' />,
		},
	],
	footerText: '© 2024 Tars Projetos. Todos os direitos reservados.',
	footerLinks: [
		{ title: 'Políticas de privacidade', url: '/politics' },
		{ title: 'Termos de uso', url: '/politics' },
	],
};
