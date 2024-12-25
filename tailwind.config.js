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
      },
    },
  },
  plugins: [],
};
