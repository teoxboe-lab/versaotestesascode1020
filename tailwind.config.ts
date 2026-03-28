/** @type {import('tailwindcss').Config} */
module.exports = {
  // O 'content' diz ao Tailwind quais arquivos escanear para gerar o CSS
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores customizadas do seu projeto
        cream: '#FFFBEB',
        'brand-yellow': '#FACC15',
        'brand-red': '#BE123C',
        'brand-green': '#064E3B',
        border: '#E5E7EB',
        
        // Adicione estas duas linhas para corrigir o erro do @apply no globals.css
        background: "var(--background)",
        foreground: "var(--foreground)",
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
};