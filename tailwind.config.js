/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Shop page container grid
        shop: "1fr 3fr",
      },
    },
  },
  plugins: [],
};
