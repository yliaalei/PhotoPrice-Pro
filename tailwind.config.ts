import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#F7F5F2",
        card: "#FFFFFF",
        primary: "#1E1E1E",
        secondary: "#B38B59",
        border: "#E5E2DD",
        success: "#4CAF50",
        warning: "#FFB300",
        danger: "#E53935"
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "sans-serif"
        ]
      },

      borderRadius: {
        xl: "18px",
        "2xl": "28px"
      },

      boxShadow: {
        card: "0 12px 30px rgba(0,0,0,0.08)"
      }
    }
  },

  plugins: []
};

export default config;
