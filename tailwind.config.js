/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#010851',
        'secondary' : '#9a7af1',
        'tartiary' : '#707070',
        'neutralGrey' : '#717171',
        'pink' : '#ee9ae5',
        'brandPrimary' : '#1B8B00',
        'textGreen': '#1B8B00',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

