/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Diga ao Tailwind onde procurar suas classes
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 2. Mapeie as variáveis do seu globals.css
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        // Suas cores personalizadas
        cream: '#FFFBEB',
        'brand-yellow': '#FACC15',
        'brand-red': '#BE123C',
        'brand-green': '#064E3B',
        border: '#E5E7EB',
      },
      fontFamily: {
        impact: ['Impact', 'Arial Narrow', 'sans-serif'],
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-xl': '8px 8px 0px 0px #000000',
      },
    },
  },
  plugins: [],
}