/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
       baseVioleta: '#d1abc8',
       verde: '#666d41',
       azul: '#8984ac',
       amarillo: '#f9f3d6',
       marron: '#c2b19a',
       marronVerdoso: '#8e875f',
    },
  },
  plugins: [require('daisyui')],
}

