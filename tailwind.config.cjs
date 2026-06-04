/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0284c7",
        brandSoft: "#e0f2fe",
        ink: "#0b1a24",
        slateInk: "#1e293b",
        surface: "#f8fafc",
        muted: "#64748b",
        border: "#e2e8f0",
        // Blue-Green theme accents
        accentTeal: "#0d9488",
        accentTealSoft: "#ccfbf1",
        accentEmerald: "#10b981",
        accentEmeraldSoft: "#d1fae5",
        accentCyan: "#06b6d4",
        accentCyanSoft: "#ecfeff",
        accentSky: "#0ea5e9",
        accentSkySoft: "#e0f2fe",
        accentMint: "#22c55e",
        accentMintSoft: "#f0fdf4",
        accentIndigo: "#4f46e5",
        accentIndigoSoft: "#e0e7ff",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(11, 26, 36, 0.06)",
        lift: "0 20px 60px rgba(13, 148, 136, 0.16)",
      },
      fontFamily: {
        body: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 45%), radial-gradient(circle at 90% 10%, rgba(16, 185, 129, 0.08) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 50%)",
        "gradient-primary": "linear-gradient(135deg, #0284c7 0%, #0d9488 100%)",
        "gradient-vibrant": "linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)",
        "gradient-emerald": "linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)",
        "cta-gradient": "linear-gradient(135deg, #0b1a24 0%, #042b35 50%, #032a22 100%)",
      },
    },
  },
  plugins: [],
};
