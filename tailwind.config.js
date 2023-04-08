/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"navy-blue": "#0B066E",
				"shade-blue": "#1A233B",
				"light-shade-blue": "#303C5A",
			},
		},
	},
	plugins: [],
};
