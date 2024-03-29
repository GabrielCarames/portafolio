/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-1": "#2716a0",
        "blue-2": "#49a4ff",
        "blue-3": "#0074e7",
        "blue-4": "#0080ff",
        "blue-5": "#2f2679",
        "green-1": "#1abc9c",
        "green-2": "#23dab5",
        "green-3": "#57e694",
        "green-4": "#297d6d",
        "violet-1": "#9340ff",
        "violet-2": "#6100df",
        "violet-3": "#615fda",
        "violet-4": "#4500a0",
        "white-2": "#f6f5f5"
      },
      screens: {
        xs: "500px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
    }
  },
  plugins: []
}
