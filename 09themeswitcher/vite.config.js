import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: "media",
  plugins: [react(),tailwindcss(),],  
 })

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class", // 👈 enable class-based dark mode
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

