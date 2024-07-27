/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'Arial', 'sans-serif'], 
      },
      colors: {
        'dark-charcoal': '#1B1D1F',   // Dark Charcoal
        'very-dark-gray': '#111315',  // Very Dark Gray
        'slate-gray': '#6F757C',      // Slate Gray
        'pale-mint': '#BEE3CC',       // Pale Mint
        'off-white': '#FEF7EE',       // Off-White
        'goldenrod': '#F6C768',       // Goldenrod
        'coral': '#ED735D',           // Coral
      },
    },
  },
  plugins: [],
};
