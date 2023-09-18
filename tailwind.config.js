/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/Projecttwo/desktop/image-hero.jpg')",
      },
      colors: {
        oneprimary: "hsl(7, 99%, 70%)",
        onesecondary: "hsl(51, 100%, 49%)",
        onegreen: "hsl(167, 40%, 24%)",
        onedarkblue: "hsl(198, 62%, 26%)",
        twodarkblue: "hsl(168, 34%, 41%)",
        twograyblue: "hsl(212, 27%, 19%)",
        twoverydarkgrayishblue: "hsl(213, 9%, 39%)",
        twodarkgrayishblue: "hsl(232, 10%, 55%)",
        twovgrayishblue: "hsl(210, 4%, 67%)",
      },
    },
  },
  plugins: [],
};
