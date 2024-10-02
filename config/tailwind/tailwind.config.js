/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "../../templates/**/*.html"
    ],
    theme: {
      extend: {
        gridTemplateColumns: {
          'hero': '0.7fr 1fr',
        }},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  