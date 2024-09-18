/** @format */

'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			toastOptions={{
				classNames: {
					toast:
						'group toast group-[.toaster]:bg-green-200 group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted-foreground',
					actionButton:
						'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
					cancelButton:
						'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
					error:
						'group toast group-[.toaster]:bg-red-200 group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
