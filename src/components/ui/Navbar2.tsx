/** @format */

'use client';

import logo from '@/assets/logo.png';
import type { ButtonProps } from '@relume_io/relume-ui';
import { useMediaQuery } from '@relume_io/relume-ui';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { RxChevronDown } from 'react-icons/rx';
import { Button } from './button';

type ImageProps = {
	url?: string;
	src: string;
	alt?: string;
};

type NavLink = {
	url: string;
	title: string;
	subMenuLinks?: NavLink[];
};

type Props = {
	logo: ImageProps;
	navLinks: NavLink[];
	buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Navbar2 = (props: Navbar2Props) => {
	const { navLinks, buttons } = {
		...Navbar2Defaults,
		...props,
	} as Props;

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 991px)');
	const path = usePathname();

	return (
		<nav className='top-0 fixed w-full py-4 z-50 bg-white/70 backdrop-blur-md px-4 lg:px-[5%] shadow-small '>
			<div className='flex flex-col items-center justify-center'>
				<div className='flex items-center justify-between w-full max-w-xxl mx-auto size-full'>
					<a href={'/'}>
						<Image
							width={56}
							height={40}
							src={logo}
							alt={'logo infiti multi gestão'}
						/>
					</a>

					<motion.div
						variants={{
							open: {
								height: 'var(--height-open, 100dvh)',
							},
							close: {
								height: 'var(--height-closed, 0)',
							},
						}}
						animate={isMobileMenuOpen ? 'open' : 'close'}
						initial='close'
						exit='close'
						transition={{ duration: 0.4 }}
						className='overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'>
						{navLinks.map((navLink, index) => (
							<div
								key={index}
								className='first:pt-4 lg:first:pt-0 '>
								{navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
									<SubMenu
										navLink={navLink}
										isMobile={isMobile}
									/>
								) : (
									<a
										href={navLink.url}
										className='block py-3 text-md lg:px-4 lg:py-2 lg:text-base font-semibold hover:text-blue-600 transition-all ease-linear duration-200'>
										{navLink.title}
									</a>
								)}
							</div>
						))}
					</motion.div>
					<div className='hidden justify-self-end lg:flex gap-2 '>
						{/* <Button className='border-2 bg-transparent border-blue-500 hover:bg-blue-600 font-semibold text-blue-600 transition-all ease-linear duration-200 hover:text-zinc-50 text-base'>
							Área Do Cliente
						</Button> */}
						<a
							href='https://api.whatsapp.com/send?phone=11990010623&text=Ol%C3%A1%2C+estava+navegando+pelo+seu+site+e+preciso+de+ajuda'
							target='_blank'
							rel='noopener noreferrer'>
							<Button className='border-2 border-green-500 bg-green-600 font-semibold hover:bg-green-500 transition-all ease-linear duration-200 text-green-50 text-base flex gap-1.5'>
								(11) 99001 0623 <BiLogoWhatsapp size={28} />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

const SubMenu = ({
	navLink,
	isMobile,
}: {
	navLink: NavLink;
	isMobile: boolean;
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<nav
			onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
			onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}>
			<button
				className='flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base'
				onClick={() => setIsDropdownOpen((prev) => !prev)}>
				<span>{navLink.title}</span>
				<motion.span
					animate={isDropdownOpen ? 'rotated' : 'initial'}
					variants={{
						rotated: { rotate: 180 },
						initial: { rotate: 0 },
					}}
					transition={{ duration: 0.3 }}>
					<RxChevronDown />
				</motion.span>
			</button>
			{isDropdownOpen && (
				<AnimatePresence>
					<motion.nav
						animate={isDropdownOpen ? 'open' : 'close'}
						initial='close'
						exit='close'
						variants={{
							open: {
								visibility: 'visible',
								opacity: 'var(--opacity-open, 100%)',
								y: 0,
							},
							close: {
								visibility: 'hidden',
								opacity: 'var(--opacity-close, 0)',
								y: 'var(--y-close, 0%)',
							},
						}}
						transition={{ duration: 0.2 }}
						className='bg-background-primary lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]'>
						{navLink.subMenuLinks?.map((subMenuLink, index) => (
							<a
								key={index}
								href={subMenuLink.url}
								className='block py-3 text-center lg:px-4 lg:py-2 lg:text-left'>
								{subMenuLink.title}
							</a>
						))}
					</motion.nav>
				</AnimatePresence>
			)}
		</nav>
	);
};

export const Navbar2Defaults: Navbar2Props = {
	logo: {
		url: '#',
		src: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
		alt: 'Logo image',
	},
	navLinks: [
		{ title: 'Home', url: '/' },
		{ title: 'Sobre Nós', url: '/about' },
		{ title: 'Projetos', url: '/projects' },
		{ title: 'Contato', url: '/contact' },
	],
	buttons: [
		{
			title: 'Button',
			size: 'sm',
		},
	],
};

const topLineVariants = {
	open: {
		translateY: 8,
		transition: { delay: 0.1 },
	},
	rotatePhase: {
		rotate: -45,
		transition: { delay: 0.2 },
	},
	closed: {
		translateY: 0,
		rotate: 0,
		transition: { duration: 0.2 },
	},
};

const middleLineVariants = {
	open: {
		width: 0,
		transition: { duration: 0.1 },
	},
	closed: {
		width: '1.5rem',
		transition: { delay: 0.3, duration: 0.2 },
	},
};

const bottomLineVariants = {
	open: {
		translateY: -8,
		transition: { delay: 0.1 },
	},
	rotatePhase: {
		rotate: 45,
		transition: { delay: 0.2 },
	},
	closed: {
		translateY: 0,
		rotate: 0,
		transition: { duration: 0.2 },
	},
};
