/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Display", "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        Unica: ["Unica", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// font-family: 'Inter', sans-serif;
// font-family: 'Montserrat', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Unica One', cursive;
