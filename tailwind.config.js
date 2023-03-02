/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {},
      fontFamily: {
        roboto: ["Roboto"],
      },
      boxShadow: {
        rl: "0 0 24px rgba(0, 0, 0, 0.12)",
      },
      width: {
        679: "679px",
        457: "457px",
        drop: "23rem",
        cb: "52rem",
        cbmd: "32rem",
      },
      height: {
        362: "362px",
        cb: "30rem",
        cbmd: "40rem",
      },
    },
  },
  plugins: [],
};
