/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
      extend: {
        fontFamily: {
            rob: ['Roboto'],
        },
        colors: {
            primary: "var(--primary-color)",
            secondary: "var(--secondary-color)",
        },
      },
    },
    plugins: [],
  };
  