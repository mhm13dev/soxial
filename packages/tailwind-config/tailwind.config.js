/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          dark: "#101010",
          "dark-2": "#303030",
        },
      },
      keyframes: {
        "slide-in-left": {
          "0%": {
            transform: "translateX(200%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "slide-out-right": {
          "0%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(200%)",
            opacity: 0,
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 0.2s ease-in",
        "slide-out-right": "slide-out-right 0.2s ease-in",
      },
    },
  },
  plugins: [],
};
