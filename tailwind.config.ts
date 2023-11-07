import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				orange: "#ff6700",
				primary: "#004e98",
			},
			backgroundColor: {
				bannerBg: "#152238",
			},
			fontSize: {
				h2: "26px",
            textSize: "15px",
			},
		},
	},
	plugins: [],
};
export default config;
