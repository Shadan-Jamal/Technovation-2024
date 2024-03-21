/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      'hero-image':"url('./public/assets/hero_section.jpg')"
    },
  },
  plugins: [],
}

