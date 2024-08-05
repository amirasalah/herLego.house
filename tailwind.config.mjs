/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				salmon: '#ff9999',
				'accent-light': '#f5ff',
				accent: '#2337ff',
				'accent-dark': '#000d8a',
			}, 
			fontFamily: {
				'Montserrat': ['Montserrat', 'sans-serif'],
			},
			fontSize: {
				'xs': '.75rem',
				'sm': '.875rem',
				'md': '1rem',
				'lg': '1.125rem',
				'xl': '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '5rem',
				'6xl': '7rem',
				'7xl': '9rem',
				'8xl': '11rem',
				'9xl': '13rem',
				'10xl': '15rem',
			}, 
			lineHeight: {
				'30': '11rem'
			}
		},
	},
	plugins: [],
}
