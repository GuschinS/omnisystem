// postcss.config.cjs
module.exports = {
  plugins: {
    '@tailwindcss/postcss7-compat': {}, // ← Используем правильный пакет
    autoprefixer: {},
  },
}