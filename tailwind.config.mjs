/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				green: {
					50: '#f1fcf4',
					100: '#ddfbe6',
					200: '#bdf5ce',
					300: '#8aeba9',
					400: '#62DC89',
					500: '#29be59',
					600: '#1c9d46',
					700: '#197c3a',
					800: '#196232',
					900: '#17502b',
					950: '#072c14',
				},
				purple: {
					50: '#efeffe',
					100: '#e2e2fd',
					200: '#cacafb',
					300: '#aba9f8',
					400: '#9387f2',
					500: '#826aea',
					600: '#744edd',
					700: '#613cbf',
					800: '#51369d',
					900: '#45327d',
					950: '#291d49',
				},
			}
		},
	},
	plugins: [],
}
