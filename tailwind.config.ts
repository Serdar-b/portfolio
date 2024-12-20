import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import type { PluginAPI } from "tailwindcss/types/config";

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
      container: {
        center: true,
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
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "move-left-anim": "move-left-anim 1s linear infinite",
        "move-right-anim": "move-right-anim 1s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "counter-spin": "counter-spin 20s linear infinite", 
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        "move-right-anim": {
          "0%": {
            transform: "translateX(-50%)",
          },
          "100%": {
            transform: "translateX(0%) ",
          },
        },
        "move-left-anim": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-50%) ",
          },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "counter-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
    variants: {
      animation: ["hover", "group-safe"],
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".animation-pause": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: PluginAPI) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
