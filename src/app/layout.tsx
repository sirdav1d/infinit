/** @format */

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Footer4 } from '@/components/ui/Footer4';

import { Toaster } from '@/components/ui/sonner';
import { Navbar1 } from '@/components/ui/Navbar1';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Infinit Multi Gestão',
	description:
		'A Infinit Multi Gestão se destaca na administração de condomínios, com soluções completas que incluem serviços de síndico profissional, limpeza e zeladoria.',
	icons: ['favicon.png'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={montserrat.className}>
				<Navbar1 />
				{children}
				<Toaster position='top-center' />
				<Footer4 />
			</body>
		</html>
	);
}
