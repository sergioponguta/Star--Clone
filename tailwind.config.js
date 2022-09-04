/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b": `radial-gradient(circle at 81% 49%, rgba(0, 0, 0, 0) 0%, rgba(14, 11, 19, 0.47) 18%, rgba(14, 11, 19, 1) 89%);`,
      },
    },
  },
  plugins: [],
};
