module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      invert: {
        25: '.25',
      },
      borderRadius: {
        'right-clip': '0 0 200px/40px 0'
      },
    },
  },
  plugins: [require("daisyui")],
}