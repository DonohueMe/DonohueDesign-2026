/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm:  '640px',
      md:  '840px',
      lg:  '1024px',
      xl:  '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['-apple-system', '"SF Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        text:    '#1d1d1f',
        sub:     '#3d3d3f',
        meta:    '#8e8e93',
        link:    '#2997ff',
        border:  '#e5e5ea',
        surface: '#f2f2f7',
      },
      maxWidth: {
        site: '1280px',
      },
    },
  },
};
