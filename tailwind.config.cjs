// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        accent: "#00A3E0",
        success: "#00B74A",
        lightBg: "#F9F9F9",
        darkBg: "#121212",
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        slideUp: "slideUp 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { transform: "translateY(40px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 20px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};