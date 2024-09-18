/** @format */

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { getLocalStorage, setLocalStorage } from '@/helpers/storageHelper';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Button } from './button';

export default function BannerLGPD() {
	const [cookieConsent, setCookieConsent] = useState(false);
	const [canSHow, setCanShow] = useState(true);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage('cookie_consent', null);
		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	useEffect(() => {
		const newValue = cookieConsent ? 'granted' : 'denied';
		if (cookieConsent) {
			setCanShow(false);
		} else {
			setCanShow(true);
		}
		setLocalStorage('cookie_consent', cookieConsent);
		console.log(cookieConsent);
	}, [cookieConsent]);

	async function handleAccept() {
		setCanShow(false);
		setCookieConsent(true);
	}

	async function handleDeny() {
		setCanShow(true);
		setCookieConsent(false);
		toast.error(
			`Para ter uma melhor experiência como usuário, recomendamos que aceite nossas políticas de privacidade e termos de uso`,
		);
	}

	return (
		<AnimatePresence mode='wait'>
			{canSHow && (
				<motion.div
					animate={{
						y: 0,
						opacity: 1,
						transition: { duration: 0.3, delay: 0.8 },
					}}
					initial={{ y: -80, opacity: 0 }}
					exit={{ y: 80, opacity: 0, transition: { duration: 0.3 } }}
					className={`fixed bottom-0 center 'flex' items-center w-full mx-auto h-fit text-zinc-950 text-xs lg:text-sm p-3  z-[999999999999999]`}>
					<div className=' max-w-lg  rounded-lg gap-1 lg:gap-5 shadow-lg flex flex-col lg:flex-row justify-center items-center mx-auto p-5 bg-zinc-50/60 backdrop-blur-md lg:p-8 text-zinc-950 text-sm'>
						<p>
							Nós utilizamos cookies para melhorar sua experiência como usuário.
							Para conferir detalhadamente nossas boas práticas, acesse nossas{' '}
							<a
								className='hover:text-blue-600 transition duration-300 underline'
								target='_blank'
								href='/politics'>
								Políticas de Privacidade
							</a>{' '}
							e{' '}
							<a
								className='hover:text-blue-600 transition duration-300 underline'
								target='_blank'
								href='/politics'>
								Termos de uso
							</a>
							.
						</p>
						<div className='gap-3 lg:gap-5 flex justify-center items-center mx-auto'>
							<Button
								onClick={() => handleAccept()}
								type='button'
								className={`w-fit px-4 py-2 lg:w-28 lg:h-12 bg-blue-600 z-50 disabled:grayscale disabled:hover:grayscale flex gap-2 items-center justify-center text-center hover:bg-blue-500  transition-all duration-300 mt-3 lg:text-base text-sm font-bold tracking-wide`}>
								<p className='flex gap-3 items-center justify-center drop-shadow-sm'>
									Aceitar
								</p>
							</Button>
							<Button
								onClick={() => handleDeny()}
								type='button'
								className={`flex items-center justify-center w-fit text-center hover:opacity-80 transition duration-300 mt-3 lg:text-base text-sm font-medium tracking-wide bg-transparent text-zinc-900 hover:text-red-600 hover:bg-transparent`}>
								<p className='flex gap-3 items-center justify-center underline'>
									Recusar
								</p>
							</Button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
