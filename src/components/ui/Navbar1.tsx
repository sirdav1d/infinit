/** @format */

'use client';

import { useState } from 'react';
import { useMediaQuery } from '@relume_io/relume-ui';

import { AnimatePresence, motion } from 'framer-motion';
import { RxChevronDown } from 'react-icons/rx';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import { Button } from './button';

type NavLink = {
	url: string;
	title: string;
	subMenuLinks?: NavLink[];
};

type Props = {
	navLinks: NavLink[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Navbar1 = (props: Navbar1Props) => {
	const { navLinks } = {
		...Navbar1Defaults,
		...props,
	} as Props;

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 991px)');

	return (
		<nav className='flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]'>
			<div className='size-full lg:flex lg:items-center lg:justify-between max-w-xxl mx-auto'>
				<div className='flex items-center justify-between py-4 px-[5%] min-h-full lg:px-0 '>
					<a href={'/'}>
						<Image
							width={60}
							height={60}
							src={logo}
							alt={'Logo Infinit Multi Gestão'}
						/>
					</a>
					<button
						className='-mr-2 flex size-12 flex-col items-center justify-center lg:hidden'
						onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
						<motion.span
							className='my-[3px] h-0.5 w-6 bg-black'
							animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
							variants={topLineVariants}
						/>
						<motion.span
							className='my-[3px] h-0.5 w-6 bg-black'
							animate={isMobileMenuOpen ? 'open' : 'closed'}
							variants={middleLineVariants}
						/>
						<motion.span
							className='my-[3px] h-0.5 w-6 bg-black'
							animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
							variants={bottomLineVariants}
						/>
					</button>
				</div>
				<motion.div
					variants={{
						open: {
							height: 'var(--height-open, 100dvh)',
						},
						close: {
							height: 'var(--height-closed, 0)',
						},
					}}
					initial='close'
					exit='close'
					animate={isMobileMenuOpen ? 'open' : 'close'}
					transition={{ duration: 0.4 }}
					className='overflow-hidden px-[5%] lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'>
					{navLinks.map((navLink, index) => (
						<div
							key={index}
							className='first:pt-4 lg:first:pt-0'>
							{navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
								<SubMenu
									navLink={navLink}
									isMobile={isMobile}
								/>
							) : (
								<a
									href={navLink.url}
									className='block py-3 text-md lg:px-4 lg:py-2 lg:text-base font-semibold hover:text-blue-500 transition-all ease-linear duration-200'>
									{navLink.title}
								</a>
							)}
						</div>
					))}
					<div className='mt-6 flex flex-col items-center gap-4 lg:ml-4 lg:mt-0 lg:flex-row'>
						{/* <Button
							variant={'outline'}
							className='border-2 border-blue-600 transition-all ease-linear duration-200 text-blue-600 font-semibold text-base hover:bg-blue-600 hover:text-zinc-50 bg-transparent'>
							Área Do Cliente
						</Button> */}
						<Button
							variant={'brand'}
							className='bg-green-600 hover:bg-green-500 text-zinc-50 border-2 border-green-500'>
							(11) 99001-0623
						</Button>
					</div>
				</motion.div>
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
		<div
			onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
			onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}>
			<button
				className='flex w-full items-center justify-between gap-2 py-3 text-left text-base lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base'
				onClick={() => setIsDropdownOpen((prev) => !prev)}>
				<span>{navLink.title}</span>
				<motion.span
					variants={{
						rotated: { rotate: 180 },
						initial: { rotate: 0 },
					}}
					animate={isDropdownOpen ? 'rotated' : 'initial'}
					transition={{ duration: 0.3 }}>
					<RxChevronDown />
				</motion.span>
			</button>
			{isDropdownOpen && (
				<AnimatePresence>
					<motion.nav
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
						animate={isDropdownOpen ? 'open' : 'close'}
						initial='close'
						exit='close'
						transition={{ duration: 0.2 }}
						className='bg-zinc-50/50 backdrop-blur-sm lg:absolute lg:z-50 lg:border lg:border-border-primary lg:p-2 lg:[--y-close:25%]'>
						{navLink.subMenuLinks?.map((navLink, index) => (
							<a
								key={index}
								href={navLink.url}
								className='block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base'>
								{navLink.title}
							</a>
						))}
					</motion.nav>
				</AnimatePresence>
			)}
		</div>
	);
};

export const Navbar1Defaults: Navbar1Props = {
	navLinks: [
		{ title: 'Home', url: '/' },
		{ title: 'Sobre Nós', url: '/about' },
		{ title: 'Projetos', url: '/projects' },
		{ title: 'Contato', url: '/contact' },
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
