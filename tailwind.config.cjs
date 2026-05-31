/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1237e6",
        brandSoft: "#d9e0ff",
        ink: "#0f1534",
        slateInk: "#1c2448",
        surface: "#f6f7fb",
        muted: "#667085",
        border: "#e4e7ec",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 21, 52, 0.08)",
        lift: "0 20px 60px rgba(18, 55, 230, 0.18)",
      },
      fontFamily: {
        body: ["Manrope", "system-ui", "sans-serif"],
        heading: ["Sora", "Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(18,55,230,0.12), transparent 40%), radial-gradient(circle at 90% 10%, rgba(18,55,230,0.08), transparent 35%)",
      },
    },
  },
  plugins: [],
};
