/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#006aff',
				},
				secondary: {
					DEFAULT: '#0f1016',
				},
				neutral: {
					DEFAULT: '#f0f0f0',
				},
			},
		},
	},
	plugins: [],
}
