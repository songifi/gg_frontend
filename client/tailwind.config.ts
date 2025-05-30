/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
        sans: ['var(--font-inter)'],
        geist: ['var(--font-geistSans)', 'sans-serif'],
      },
      },
    },
    plugins: [],
  };
  