/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: "#181310",
        charcoal: "#221B17",
        ivory: "#F6EFE4",
        parchment: "#EFE4D2",
        terracotta: "#B5502F",
        "terracotta-light": "#D0763F",
        maroon: "#6E1B26",
        gold: "#C79A4B",
        "gold-light": "#E0C289",
        saffron: "#E08A2B",
        forest: "#2B3B2A",
        clay: "#8B4A34",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      backgroundImage: {
        grain: "url('/grain.png')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
