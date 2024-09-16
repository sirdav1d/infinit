/** @format */
'use client';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { FormSchema } from '@/lib/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { Input } from './input';
import { Textarea } from './textarea';
import { sendEmail } from '@/app/actions/email-action';

export default function FormContact() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
			consent: false,
		},
	});

	const router = useRouter();

	async function onSubmit(values: z.infer<typeof FormSchema>) {
		try {
			const email = values.email;
			const password = values.phone;
			const name = values.name;
			const message = values.message;
			const consent = values.consent;
			await sendEmail(values);
			toast.success(`Mensagem enviada com sucesso`);
			form.reset();
			router.refresh();
			router.push('/thanks');
		} catch (error) {
			toast.error(`Algo deu errado ${error}`);
			console.log(error);
		}
	}

	return (
		<div>
			<Form {...form}>
				<form
					className='grid grid-cols-1 grid-rows-[auto_auto] gap-6'
					onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem
								aria-required
								className='relative w-full'>
								<FormLabel className='text-base font-semibold text-zinc-900'>
									Nome Completo:
								</FormLabel>
								<FormControl>
									<Input
										className='text-zinc-800 text-sm ring-0 rounded-md outline-none px-6 py-4 placeholder:text-zinc-400'
										placeholder='nome do usuário'
										type='text'
										{...field}
									/>
								</FormControl>
								<FormMessage className='absolute text-xs text-red-600' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem
								aria-required
								className='relative w-full'>
								<FormLabel className='text-base font-semibold text-zinc-900'>
									E-mail:
								</FormLabel>
								<FormControl>
									<Input
										className='text-zinc-800 text-sm ring-0 rounded-md outline-none px-6 py-4 placeholder:text-zinc-400'
										placeholder='Digite seu e-mail'
										type='email'
										{...field}
									/>
								</FormControl>
								<FormMessage className='absolute text-xs text-red-600' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='phone'
						render={({ field }) => (
							<FormItem
								aria-required
								className='relative w-full'>
								<FormLabel className='text-base font-semibold text-zinc-900'>
									Telefone:
								</FormLabel>
								<FormControl>
									<Input
										className='text-zinc-800 text-sm ring-0 rounded-md outline-none px-6 py-4 placeholder:text-zinc-400'
										placeholder='(99) 99999 9999'
										type='tel'
										{...field}
									/>
								</FormControl>
								<FormMessage className='absolute text-xs text-red-600' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='message'
						render={({ field }) => (
							<FormItem
								aria-required
								className='relative w-full'>
								<FormLabel className='text-base font-semibold text-zinc-900'>
									Mensagem:
								</FormLabel>
								<FormControl>
									<Textarea
										className='text-zinc-800 text-sm ring-0 rounded-md outline-none px-6 py-4 placeholder:text-zinc-400'
										placeholder='Digite sua mensagem'
										{...field}
									/>
								</FormControl>
								<FormMessage className='absolute text-xs text-red-600' />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='consent'
						render={({ field }) => (
							<FormItem
								aria-required
								className='relative w-full flex gap-2 items-baseline'>
								<>
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormLabel className='text-base font-normal text-zinc-900'>
										<p>
											Aceito os{' '}
											<a
												className='underline hover:text-blue-600 transition-all duration-200 ease-linear'
												href='/politics'
												target='_blank'
												rel='noopener noreferrer'>
												{''}termos
											</a>
										</p>
									</FormLabel>
									<FormMessage className='absolute text-xs text-red-600' />
								</>
							</FormItem>
						)}
					/>
					<Button
						disabled={
							form.formState.isLoading ||
							form.formState.isSubmitting ||
							!form.getValues('consent')
						}
						type='submit'
						variant={'brand'}
						className='w-full bg-blue-600 hover:bg-blue-500 disabled:grayscale-0 disabled:cursor-none'>
						Enviar Mensagem
					</Button>
				</form>
			</Form>
		</div>
	);
}
