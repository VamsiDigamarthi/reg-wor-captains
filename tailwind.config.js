/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        custom: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        customGray: "#687280",
        primary: "#e02e88",
        borderColor: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
