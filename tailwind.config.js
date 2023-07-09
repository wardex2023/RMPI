/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/*.html"],
  theme: {
    screens: {
      xs: "425",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      screens: {
        xxl: { min: "2560px", max: "4000px" },
      },
    },
  },
  plugins: [],
};
