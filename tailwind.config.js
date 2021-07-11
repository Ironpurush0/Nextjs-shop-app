module.exports = {
	mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				amazon_blue: {
					orange: "#EAA044",
					priceText: "#C22704",
					light: "#232F3E",
					DEFAULT: "#131921",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/line-clamp")],
};
