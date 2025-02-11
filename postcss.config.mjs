import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    tailwindcss,       // Use the imported Tailwind CSS plugin
    autoprefixer,      // Use the imported Autoprefixer plugin
  ],
};

export default config;