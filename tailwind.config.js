/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{jsx,js}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				satisfy: ["Satisfy", "cursive"],
			},
		},
	},
	plugins: [],
};
