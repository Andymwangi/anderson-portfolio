/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require("tailwindcss"),  // This is now working with the correct plugin
    require("autoprefixer"),  // Autoprefixer should still be used for cross-browser support
  ],
};

export default config;
