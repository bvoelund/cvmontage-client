/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        "primary-darker": "#134e4a",
      },
      transitionDelay: {
        150: "150ms",
        450: "450ms",
        600: "600ms",
        750: "750ms",
        900: "900ms",
        1050: "1050ms",
        1200: "1200ms",
        1350: "1350ms",
        // 1500: "1500ms",
        // 2000: "2000ms",
        // 2500: "2500ms",
        // 3000: "3000ms",
        // 3500: "3500ms",
        // 4000: "4000ms",
        // 4500: "4500ms",
      },
    },
  },
  safelist: [
    "delay-150",
    "delay-300",
    "delay-450",
    "delay-600",
    "delay-750",
    "delay-900",
    "delay-1050",
    "delay-1200",
    "delay-1350",
    // "delay-500",
    // "delay-1000",
    // "delay-1500",
    // "delay-2000",
    // "delay-2500",
    // "delay-3000",
    // "delay-3500",
    // "delay-4000",
    // "delay-4500",
  ],
  plugins: [],
};
