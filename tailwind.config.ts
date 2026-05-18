import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        magma: {
          50: "#ffe7de",
          400: "#ff5c35",
          500: "#f24822",
          700: "#b42a11",
          900: "#1f0602"
        }
      },
      boxShadow: {
        lava: "0 0 40px rgba(242, 72, 34, 0.35)",
      }
    },
  },
  plugins: [],
};
export default config;
