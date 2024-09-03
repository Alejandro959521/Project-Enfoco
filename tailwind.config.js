/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./template.html",
    "./src/front/js/**/*.{js,jsx,ts,tsx}",  // Ruta hacia los archivos JS/JSX
    "./src/front/component/**/*.{js,jsx,ts,tsx}", // Ruta hacia los componentes
    "./src/front/pages/**/*.{js,jsx,ts,tsx}",  // Ruta hacia las páginas
  ], 
  theme: {
    extend: {},
  },
  plugins: [],
}

