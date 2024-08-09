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
        dark:"#211935"
      },
    },
  },
  plugins: [],
}
