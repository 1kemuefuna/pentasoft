/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#4A6CF7',
        dark: '#111928',
        'dark-bg': '#151D2A',
        'body-color': '#959CB1',
        'gray-2': '#F7F9FC',
      },
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
      },
      screens: {
        xs: '450px',
        // => @media (min-width: 450px) { ... }
        sm: '575px',
        // => @media (min-width: 576px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '992px',
        // => @media (min-width: 992px) { ... }
        xl: '1200px',
        // => @media (min-width: 1200px) { ... }
        '2xl': '1400px',
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
};