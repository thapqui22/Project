/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1140: "1140px",
      },
      colors: {
        "defaut-color": "#fd3d57",
        "defaut-color-white": "#f3f3f3",
      },
    },
  },
  plugins: [],
};
