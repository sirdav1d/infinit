/** @format */

import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				'0': '0px',
				'1': '0.25rem',
				'2': '0.5rem',
				'3': '0.75rem',
				'4': '1rem',
				'5': '1.25rem',
				'6': '1.5rem',
				'8': '2rem',
				'10': '2.5rem',
				'12': '3rem',
				'14': '3.5rem',
				'16': '4rem',
				'18': '4.5rem',
				'20': '5rem',
				'24': '6rem',
				'28': '7rem',
				'30': '7.5rem',
				'32': '8rem',
				'36': '9rem',
				'40': '10rem',
				'44': '11rem',
				'48': '12rem',
				'52': '13rem',
				'56': '14rem',
				'60': '15rem',
				'64': '16rem',
				'72': '18rem',
				'80': '20rem',
				'96': '24rem',
				px: '1px',
			},
			colors: {
				brand: {
					black: '#000000',
					white: '#ffffff',
				},
				neutral: {
					DEFAULT: '#666666',
					black: '#000000',
					white: '#ffffff',
					lightest: '#eeeeee',
					lighter: '#cccccc',
					light: '#aaaaaa',
					dark: '#444444',
					darker: '#222222',
					darkest: '#111111',
				},
				system: {
					'success-green': '#027a48',
					'success-green-light': '#ecfdf3',
					'error-red': '#b42318',
					'error-red-light': '#fef3f2',
				},
				background: 'hsl(var(--background))',
				border: 'hsl(var(--border))',
				text: {
					DEFAULT: '#000000',
					primary: '#000000',
					secondary: '#aaaaaa',
					alternative: '#ffffff',
					success: '#027a48',
					error: '#b42318',
				},
				link: {
					DEFAULT: '#000000',
					primary: '#000000',
					secondary: '#666666',
					alternative: '#ffffff',
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#000000',
						lineHeight: '1.5',
						maxWidth: '100%',
						p: {
							marginTop: '0',
							marginBottom: '1rem',
						},
					},
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0px',
				},
				to: {
					height: 'var(--radix-accordion-content-height)',
				},
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)',
				},
				to: {
					height: '0px',
				},
			},
			'loop-horizontally': {
				from: {
					transform: 'translateX(0)',
				},
				to: {
					transform: 'translateX(-100%)',
				},
			},
			'loop-testimonials': {
				from: {
					transform: 'translateX(0)',
				},
				to: {
					transform: 'translateX(-135rem)',
				},
			},
			'loop-vertically': {
				from: {
					transform: 'translateY(0)',
				},
				to: {
					transform: 'translateY(-50%)',
				},
			},
			'loop-vertically-reverse': {
				from: {
					transform: 'translateY(-50%)',
				},
				to: {
					transform: 'translateY(0)',
				},
			},
			'marquee-horizontally': {
				from: {
					transform: 'translateX(0)',
				},
				to: {
					transform: 'translateX(-50%)',
				},
			},
			'marquee-top': {
				from: {
					transform: 'translateX(0)',
				},
				to: {
					transform: 'translateX(-50%)',
				},
			},
			'marquee-right': {
				from: {
					transform: 'translateX(0)',
				},
				to: {
					transform: 'translateX(100%)',
				},
			},
			'marquee-bottom': {
				from: {
					transform: 'translateX(-50%)',
				},
				to: {
					transform: 'translateX(0%)',
				},
			},
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
			'loop-horizontally': 'loop-horizontally 20s linear infinite',
			'loop-testimonials': 'loop-testimonials 30s linear infinite',
			'loop-vertically': 'loop-vertically 40s linear infinite',
			'loop-vertically-reverse': 'loop-vertically-reverse 40s linear infinite',
			'marquee-horizontally': 'marquee-top 30s linear infinite',
			'marquee-top': 'marquee-top 50s linear infinite',
			'marquee-right': 'marquee-right 25s linear infinite',
			'marquee-bottom': 'marquee-bottom 50s linear infinite',
		},
	},
	presets: [require('@relume_io/relume-tailwind')],
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		({ addComponents }: any) => {
			const newComponents = {
				'.animate-disable': {
					animationName: 'none',
					animationDuration: '0s',
					'--tw-enter-opacity': 'initial',
					'--tw-enter-scale': 'initial',
					'--tw-enter-rotate': 'initial',
					'--tw-enter-translate-x': 'initial',
					'--tw-enter-translate-y': 'initial',
				},
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					scrollbarWidth: 'none',
				},
			};
			addComponents(newComponents);
		},
	],
};
export default config;
