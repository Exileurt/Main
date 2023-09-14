/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Projecttwo/desktop/image-hero.jpg')",
      },
      colors: {
        oneprimary: "hsl(0, 36%, 70%)",
        onesecondary: "hsl(0, 93%, 68%)",
        onethird: "hsl(0, 100%, 99%)",
        onefour: "hsl(0, 80%, 86%)",
        twoblack: "hsl(0, 0%, 0%)",
        twodarkgray: "hsl(0, 0%, 55%)",
        twoverydarkgray: "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
