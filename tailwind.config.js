/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#00ABE4",
        "secondary": "#E9F1FA",
        "extra": "FFFAF0",
        "hover": "#6495ED",
        "footer" : "#f5f4fa"
      },
      backgroundImage:{
        "bg-footer": "url('/')"
      }
    },
  },
  plugins: [],
}

