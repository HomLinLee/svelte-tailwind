/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			roboto: ['Roboto']
		},
		fontSize: {
			sm: '10px',
			base: '12px',
			normal: '14px',
			paragraph: '16px'
		},
		spacing: {
			12: '12px',
			20: '20px',
			25: '25px',
            30: '30px',
			32: '32px',
			36: '36px',
            50: '50px',
			60: '60px',
			64: '64px',
			reverse6: '-6px'
		},
		colors: {
			'blue#575FCC': '#575FCC',
			'white': '#fff',
			black: '#000',
			'black#253043': '#253043',
			'yellow#FFF9F3': '#FFF9F3'
		},
		// Replaces all of the default `opacity` values
		opacity: {
			0: '0',
			8: '0.08',
			40: '0.4',
			45: '0.45',
			80: '0.8',
			100: '1'
		},
		borderRadius: {
			sm: '10px',
			base: '12px',
			normal: '14px',
			paragraph: '16px'
		},
		width: {
			24: '24px',
			28: '28px',
			32: '32px',
			48: '48px',
			64: '64px',
			50: '50px',
			80: '80px',
			177: '177px',
			198: '198px',
			full: '100%',
			half: '50%',
			'100vw': '100vw'
		},
		height: {
			40: '40px',
			48: '48px',
			full: '100%',
			auto: 'auto',
			half: '50%',
			'100vh': '100vh'
		},
		lineHeight: {
			1: '1',
			12: '12px',
			16: '16px',
			20: '20px',
			28: '28px',
			44: '44px',
			40: '40px',
			41: '41px',
			45: '45px',
			46: '46px',
			48: '48px',
			58: '58px',
			70: '70px'
		}
	},
	variants: {
		extend: {}
	},
	plugins: [],
	important: true
}
