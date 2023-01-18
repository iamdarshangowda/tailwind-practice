/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-light": "#E5E5E5",
        "gray-dark": "#4E5150",
        "gray-medium": "#A9A9A9",
        "gray-sub": "#BDBDBD",
      },
    },
    fontFamily: {
      sans: ['"Inter"'],
    },
  },
  plugins: [],
};
