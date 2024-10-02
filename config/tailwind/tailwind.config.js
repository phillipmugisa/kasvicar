/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "../../templates/**/*.html"
    ],
    theme: {
      extend: {
        colors: {
            accentColor: '#FF7300',
            secondaryColor: 'rgb(2, 2, 32)',
        },
        width: {
            'full': '100vh',
        },
        gridTemplateColumns: {
            'desktopNav': '3fr 1fr 3fr',
        }},
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  