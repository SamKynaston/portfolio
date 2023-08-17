/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cozy': {
					100: '#0f0909',
					200: '#252222',
					300: '#3d3939',
					400: '#555252',
					500: '#6f6c6c',
					600: '#8a8888',
				},

				'cozy-lght': {
					100: '#fff',
					200: '#f2f2f2',
					300: '#f3f3f3',
					400: '#f4f4f4',
					500: '#f5f5f5',
					600: '#f6f6f6',
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
	plugins: [],
}
