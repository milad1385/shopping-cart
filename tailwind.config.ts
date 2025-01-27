import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      // xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1480px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
      },
      boxShadow: {
        blue: "0 5px 5px #407bff31",
        gray: " 0 .125rem .25rem rgba(0,0,0,.075)",
        pink: "0 5px 5px #fbcfe8",
        yellow: "0 0px 5px #FFA41B",
      },
      colors: {
        namava: "#1993ff",
        namavaBlack: "#222327",
        customGray: "#ccc",
        namavaGreen: "rgb(153, 193, 77)",
      },
    },
    fontFamily: {
      Iran: "Iran",
      Dana: "Dana",
      IranMedium: "IranMedium",
    },
  },
  plugins: [
    function ({ addVariant }: any) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
export default config;
