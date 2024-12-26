/** @type {import('tailwindcss').Config} */ 
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotateCenter: "rotateCenter 15s linear infinite",
        fadeIn: "fadeIn 0.3s ease-out",
        fadeOut: "fadeOut 0.3s ease-out",
        zoomCenter: "zoomCenter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        zoomOut: "zoomOut 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06) both",
        infiniteFloat1: "infiniteFloat1 6s ease-in-out infinite alternate",
        infiniteFloat2: "infiniteFloat2 10s ease-in-out infinite alternate",
        infiniteFloat3: "infiniteFloat3 8s ease-in-out infinite alternate",
        starTwinkle: "starTwinkle 3s ease-in-out infinite alternate",
        starPulse: "starPulse 4s ease-in-out infinite",
        starFloat: "starFloat 7s ease-in-out infinite alternate",
        starSpin: "starSpin 8s linear infinite",
      },
      keyframes: {
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
        zoomCenter: {
          "0%": {
            transform: "scale(0)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        zoomOut: {
          "0%": {
            transform: "scale(1)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(1000px) scaleY(2) scaleX(0.2)",
            opacity: 0,
          },
        },
        infiniteFloat1: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(50px)" },
        },
        infiniteFloat2: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(30px)" },
        },
        infiniteFloat3: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(70px)" },
        },
        starTwinkle: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
        starPulse: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(0.8)", opacity: 0.6 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        starFloat: {
          "0%": { 
            transform: "translateY(0) rotate(0deg)",
            opacity: 0.7
          },
          "50%": {
            opacity: 1
          },
          "100%": { 
            transform: "translateY(40px) rotate(180deg)",
            opacity: 0.7
          },
        },
        starSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};