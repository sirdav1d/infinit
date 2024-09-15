/** @format */
'use client';

import { Label, Textarea, Checkbox, Input } from '@relume_io/relume-ui';
import React, { useState } from 'react';
import { Button } from './button';
import { z } from 'zod';
import {} from 'react-hook-form';

export default function FormContact() {
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [messageInput, setMessageInput] = useState('');
	const [acceptTerms, setAcceptTerms] = useState<boolean | 'indeterminate'>(
		false,
	);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log({
			nameInput,
			emailInput,
			messageInput,
			acceptTerms,
		});
	};

	return (
		<div>
			<form
				className='grid grid-cols-1 grid-rows-[auto_auto] gap-6'
				onSubmit={handleSubmit}>
				<div className='grid w-full items-center'>
					<Label
						htmlFor='name'
						className='mb-2'>
						Nome:
					</Label>
					<Input
						className='rounded-md'
						type='text'
						id='name'
						value={nameInput}
						onChange={(e) => setNameInput(e.target.value)}
					/>
				</div>

				<div className='grid w-full items-center'>
					<Label
						htmlFor='email'
						className='mb-2'>
						E-mail:
					</Label>
					<Input
						className='rounded-md'
						type='email'
						id='email'
						value={emailInput}
						onChange={(e) => setEmailInput(e.target.value)}
					/>
				</div>
				<div className='grid w-full items-center'>
					<Label
						htmlFor='phone'
						className='mb-2'>
						Telefone:
					</Label>
					<Input
						className='rounded-md'
						type='text'
						id='phone'
						value={emailInput}
						onChange={(e) => setEmailInput(e.target.value)}
					/>
				</div>

				<div className='grid w-full items-center'>
					<Label
						htmlFor='message'
						className='mb-2'>
						Menssagem:
					</Label>
					<Textarea
						id='message'
						placeholder='Digite sua mensagem...'
						className='min-h-[11.25rem] overflow-auto rounded-md'
						value={messageInput}
						onChange={(e) => setMessageInput(e.target.value)}
					/>
				</div>

				<div className='mb-3 flex items-center space-x-2 text-sm md:mb-4'>
					<Checkbox
						className='rounded checked:text-blue-600 bg-blue-600'
						id='terms'
						checked={acceptTerms}
						onCheckedChange={setAcceptTerms}
					/>
					<Label
						htmlFor='terms'
						className='cursor-pointer'>
						Eu aceito os{' '}
						<a
							className='text-link-primary underline hover:text-blue-600'
							href='/politics'
							target='_blank'
							rel='noopener noreferrer'>
							Termos
						</a>
					</Label>
				</div>

				<div>
					<Button
						variant={'brand'}
						className='w-full bg-blue-600 hover:bg-blue-500'>
						Enviar Mensagem
					</Button>
				</div>
			</form>
		</div>
	);
}
