/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./beanflow_distributor_kopi.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        coffee: {
          dark: '#1F1209',
          brown: '#2C1A12',
          gold: '#D4A373',
          cream: '#FDF9F1',
          accent: '#B07B46'
        }
      }
    },
  },
  plugins: [],
}
