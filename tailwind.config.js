/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "python": "url('https://raw.githubusercontent.com/Abhik555/Portfolio-Development/blob/master/app/resources/images/python.png')",
        "placeholder": "url('https://raw.githubusercontent.com/Abhik555/Portfolio-Development/master/app/resources/images/proj-place.png')"
      },
    },
  },
  plugins: [],
};
