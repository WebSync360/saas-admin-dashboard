/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ash: '#F1F5F9',       // App background / light grey
          surface: '#FFFFFF',   // Cards / panels
          slate: '#475569',     // Primary text / muted UI
          charcoal: '#0F172A',  // Sidebar / headings / deep background
          red: '#DC2626',       // Accent (icons, stats, active states)
        }
      }
    },
  },
  plugins: [],
}
