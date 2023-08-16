/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        header: "1fr 1fr 4fr 1fr 0.6fr",
      },
      gridTemplateRows: {
        productDetails: " 40% 1fr",
      },
    },
  },
  plugins: [],
};
