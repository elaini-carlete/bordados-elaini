/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        dark: "#97046b",
        medium: "#db8cc3",
        light: "#ffdbf4",
      },
      fontFamily: {
        anaheim: ["Anaheim", "sans-serif"],
        comme: ["Comme", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        mobile: "408px",
        tablet: "768px",
        desktop: "1200px",
      },
      keyframes: {
        colorPulse: {
          "0%, 100%": { borderColor: "#97046b" },
          "50%": { borderColor: "#db8cc3" },
        },
      },
      animation: {
        colorPulse: "colorPulse 2s infinite",
      },
    },
  },
  plugins: [],
}