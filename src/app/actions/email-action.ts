/** @format */

'use server';

import EmailTemplate from '@/components/ui/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
	email: string;
	name: string;
	phone: string;
	message?: string;
	consent: boolean;
}

export async function sendEmail(values: SendEmailProps) {
	const senderEmail = values.email;
	const name = values.name;
	const phone = values.phone;
	const message = values.message;
	try {
		const data = await resend.emails.send({
			from: 'Tars Projetos - Website Institucional <onboarding@resend.dev>',
			to: 'faleconosco@infinitmultigestao.com.br',
			subject: 'Um Novo Lead Chegou do Seu Site',
			react: EmailTemplate({
				name: name,
				phone: phone,
				email: senderEmail,
				message: message,
			}),
			text: '',
		});
		console.log(data.data?.id);
		console.log(data.error);
	} catch (error) {
		console.log(error);
	}
}
