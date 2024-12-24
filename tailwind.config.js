/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 1s ease-in-out",
        rotateCenter: "rotateCenter 15s linear infinite",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8", filter: "brightness(1)" },
          "50%": { transform: "scale(1.2)", opacity: "1", filter: "brightness(1.5)" },
        },
        rotateCenter: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}

