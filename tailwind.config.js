module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      invert: {
        25: '.25',
      },
    },
  },
  plugins: [require("daisyui")],
}