import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(circle, #0A1E28 0%, #0A1E28 50%, #000 100%)",
      },
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#090e30",
        },
        purple: {
          custom: "#CBACF9", 
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
