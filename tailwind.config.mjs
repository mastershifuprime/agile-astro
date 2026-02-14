/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [{ pattern: /^swiper-/ }],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '540px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        text: '#444444',
        light: '#656565',
        dark: '#221246',
        primary: '#9160FD',
        secondary: '#6049CD',
        body: '#fff',
        border: '#DFDBDB',
        'theme-light': '#FAF9FC',
        'theme-dark': '#000',
      },
      fontSize: {
        base: '16px',
        h1: '2.197rem',
        'h1-sm': '1.758rem',
        h2: '1.69rem',
        'h2-sm': '1.352rem',
        h3: '1.3rem',
        'h3-sm': '1.04rem',
        h4: '1rem',
        h5: '1rem',
        h6: '1rem',
      },
      fontFamily: {
        primary: ['Open Sans', 'sans-serif'],
        secondary: ['Source Serif Pro', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwind-bootstrap-grid')({
      generateContainer: false,
      gridGutterWidth: '2rem',
      gridGutters: {
        0: '0rem',
        1: '0.25rem',
        2: '0.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '3rem',
      },
    }),
  ],
};
