/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        productSizeSection: "repeat(auto-fit, minmax(330px, 440px))",
      },
      screens: {
        'mobile': {'max': '470px'},
        'cartPage': {'max': '850px'},
      },
      transitionProperty: {
        'height': 'height',
      },
      zIndex: {
        '13': '13',
      },
      borderWidth: {
        3: '3px',
        3.5: '3.5px',
        4: '4px',
      },
      lineClamp: {
        7: '7',
      },
      colors: {
        customGray: "#767575",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
