/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode: ['class'],
content: ["content/**/*.md", "layouts/**/*.html"],
  theme: {
    container: {
        center: true,
      },
    extend: {},
  },
  plugins: [require('tailwindcss-rtl')],
}
