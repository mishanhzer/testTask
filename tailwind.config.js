/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        196: "40rem",
        350: "350px",
        420: "420px",
        510: "510px",
        600: "600px",
        1200: "1200px",
        1400: "1400px",
        cat: "-233px",
        test: "-33px",
        test1: "-66px",
        test2: "-200px",
        test3: "-266px",
      },
      fontSize: {
        fz15: "15px",
        fz13: "13px",
      },
    },
  },
  plugins: [],
};
