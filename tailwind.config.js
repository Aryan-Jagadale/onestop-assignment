/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-background': "url('/src/assets/map.svg')",
        'custom-gradient': 'linear-gradient(180deg, rgba(16,57,119,1) 0%, rgba(23,19,82,1) 100%)',
      },
    },
  },
  plugins: [],
}