/** @format */

import { z } from 'zod';

const telefoneBrRegex = /^\d{11}$/;

export const FormSchema = z.object({
	name: z
		.string({ coerce: true, message: 'Nome Inválido' })
		.min(4, { message: 'O Nome deve conter mais de 3 carcteres' }),
	email: z.string({ coerce: true, message: 'E-mail Inválido' }).email(),
	phone: z.string().refine((value) => telefoneBrRegex.test(value), {
		message: 'Telefone Inválido',
	}),
	message: z.string().optional(),
	consent: z.boolean().default(false),
});
