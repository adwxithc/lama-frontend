/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7E22CE', // Your custom primary color
        dark: "#211935",
      },
      keyframes: {
        wave: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '100% 0' },
        },
      },
      animation: {
        wave: 'wave 1.5s linear infinite', // Adjust the duration as needed
      },
    },
  },
  plugins: [],
};
