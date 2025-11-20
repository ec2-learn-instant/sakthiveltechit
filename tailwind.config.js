/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust according to your project
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // body font
        display: ["Poppins", "ui-sans-serif", "system-ui"], // headings
      },
    },
  },
  plugins: [],
};
