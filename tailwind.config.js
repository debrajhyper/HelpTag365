/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'main': '0 4px 12px 0px rgba(27, 49, 84, 0.1)',
      },
      colors: {
        primary: {
          light: {
            DEFAULT: '#edf4fe',
            hover: '#e4eefd',
            active: '#c8dbfb',
          },
          normal: {
            DEFAULT: '#4c8cf1',
            hover: '#447ed9',
            active: '#3d70c1',
          },
          dark: {
            DEFAULT: '#3969b5',
            hover: '#2e5491',
            active: '#223f6c',
          },
          darker: {
            DEFAULT: '#1b3154',
          },
        },
        hero_gradient: 'radial-gradient(50%_50%_at_50%_50%,_#FFFFFF_0%,_#EDF4FE_100%)',
      },
    },
  },
  plugins: [],
}