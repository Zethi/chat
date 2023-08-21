import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      turquese: "#24786D",
      white: colors.white,
      black: colors.black
    },
    keyframes: {
      back: {
        "50%": { transform: "translate(-0.45rem)" },
        "100%": { transform: "translate(0rem)" }
      }
    }
  },
  plugins: []
};
export default config;
