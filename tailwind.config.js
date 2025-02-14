/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths based on your project
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
  