import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        glassShatter: {
          "0%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "scale(1)",
          },
          "15%": {
            clipPath:
              "polygon(3% 0, 97% 0, 100% 98%, 0 100%, 15% 48%, 23% 52%, 45% 45%, 89% 52%, 83% 75%, 95% 85%)",
            transform: "scale(1.02)",
          },
          "30%": {
            clipPath:
              "polygon(5% 0, 95% 0, 100% 95%, 0 98%, 18% 42%, 28% 48%, 48% 40%, 85% 48%, 88% 70%, 92% 88%)",
            transform: "scale(1.05)",
          },
          "45%": {
            clipPath:
              "polygon(8% 0, 92% 0, 100% 92%, 0 95%, 22% 38%, 32% 45%, 52% 35%, 82% 45%, 92% 65%, 90% 90%)",
            transform: "scale(1.08)",
          },
          "60%": {
            clipPath:
              "polygon(10% 0, 90% 0, 100% 90%, 0 92%, 25% 35%, 35% 42%, 55% 30%, 80% 42%, 95% 60%, 88% 92%)",
            transform: "scale(1.1)",
          },
          "100%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transform: "scale(1)",
          },
        },
        imageCrack: {
          "0%": {
            filter: "brightness(1) contrast(1) hue-rotate(0deg) saturate(1)",
          },
          "25%": {
            filter:
              "brightness(1.4) contrast(1.6) hue-rotate(10deg) saturate(1.2)",
          },
          "50%": {
            filter:
              "brightness(0.7) contrast(2) hue-rotate(-15deg) saturate(1.5)",
          },
          "75%": {
            filter:
              "brightness(1.6) contrast(1.4) hue-rotate(5deg) saturate(0.8)",
          },
          "100%": {
            filter: "brightness(1) contrast(1) hue-rotate(0deg) saturate(1)",
          },
        },
      },
      animation: {
        glassShatter: "glassShatter 0.7s cubic-bezier(0.9, 0, 0.1, 1)",
        imageCrack: "imageCrack 0.7s cubic-bezier(0.9, 0, 0.1, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
