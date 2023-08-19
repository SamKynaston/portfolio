/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				'image-one':
					"/src/images/logo-d.svg",
				'image-two':
					"/src/images/logo-w.svg",
			}),

			colors: {
				'cozy': {
					100: '#0c0c0c',
					200: '#1a1a1a',
					300: '#2a2a2a',
					400: '#3a3a3a',
					500: '#4a4a4a',
					600: '#5a5a5a',
				},

				'cozy-lght': {
					100: '#FFF',
					200: '#EEE',
					300: '#DDD',
					400: '#CCC',
					500: '#BBB',
					600: '#AAA',
				},
	
				'cozy-pr': {
					100: '#f50202',
					200: '#fc4124',
					300: '#ff603e',
					400: '#ff7a58',
					500: '#ff9273',
					600: '#ffa98e',
				},
			},
		},
	},

	variants: {
		extend: {
			backgroundImage: ['dark'],
		},
	},

	plugins: [],
}
