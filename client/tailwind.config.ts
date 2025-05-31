/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        instrument: [
          'var(--font-instrument-serif)',
          'serif',
          'Georgia',
          'Times New Roman',
        ],
        
      },
      
      
    },
    colors: {
      newgreen: {
        DEFAULT: '#419057',
        light: 'rgba(65, 144, 87, 0.7)',
        dark: '#377a49',
      },
    },
  },
  plugins: [],
  corePlugins: {
    scrollBehavior: true,
  },
}
