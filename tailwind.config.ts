import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B263B", // Primary Navy
        },
        accent: {
          DEFAULT: "#BC6C25", // Terra Texas
        },
        neutral: {
          DEFAULT: "#E0D7C6", // Modern Greige
        },
        softgray: "#F8F9FA",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)"],
        body: ["var(--font-inter)"],
      },
      borderRadius: {
        xl: "8px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
        card: "0 4px 20px rgba(0,0,0,0.06)",
        glow: "0 0 0 3px rgba(188,108,37,0.3)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        400: "400ms",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to right, rgba(27,38,59,0.9), rgba(27,38,59,0.6))",
        "accent-gradient":
          "linear-gradient(135deg, #BC6C25 0%, #d97706 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;