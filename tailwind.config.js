const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./util/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		// extend: {
		// 	fontFamily: {
		// 		sans: ['Whitney', ...defaultTheme.fontFamily.sans],
		// 	},
		// },
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
