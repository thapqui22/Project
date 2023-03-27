/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "10px": "10px",
      },
      width: {
        1200: "1200px",
        1000: "1000px",
        333: "333px",
      },
      height: {
        400: "400px",
      },
      colors: {
        "defaut-color": "#fd3d57",
        // "defaut-color-red": "#fd3d57",
        "defaut-color-red": "#b90000",
        "defaut-color-black": "#2B2D42",
        "defaut-color-white": "#f3f3f3",
      },
      fontFamily: { "font-robo": ["Roboto", "sans-serif"] },
    },
  },
  plugins: [],
};
