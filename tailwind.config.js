/** @type {import('tailwindcss').Config} */
export default {
  content: ["./contact.html", "./about.html", "./Faqs.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lighBlack: 'rgb(13 13 13)',
        brightRed: 'hsl(12, 88%, 59%)',
        darkGreen: 'rgb(67 166 105)',
        bronzeLight: '#CA8F34',
        lightGray: '#ADABAB'

      },
    },
  },
  plugins: [],
}
