/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"cozy": {
					300: '#A77979',
					500: '#704F4F',
					700: '#553939',
					900: '#472D2D'
				},
			},
		},
	},
	plugins: [],
}
