import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif", "-apple-system"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
        secondary: "var(--color-bg-secondary)",
        resume: "var(--color-bg-resume)",
      },
      textColor: {
        accent: "var(--color-text-accent)",
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
      transitionDuration: {
        1500: "1500ms",
        2000: "2000ms",
      },
      backgroundImage: {
        giodesk: "url(/gio1.webp)",
        giofront: "url(/gio2.webp)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        bigger: "150%",
      },
    },
  },
  plugins: [],
};
export default config;
