/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      boxShadow: {
        rl: "0 0 24px rgba(0, 0, 0, 0.12)",
      },
      width: {
        679: "679px",
        457: "457px",
      },
      height: {
        362: "362px",
      },
    },
  },
  plugins: [],
};
