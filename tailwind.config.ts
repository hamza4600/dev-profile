import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        colorCodGray: '#191919',
        colorOrangyRed: '#fe330a',
        colorLinenRuffle: '#EFEAE3',
        colorWhite: '#fff',
        colorBlack: '#000',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      fontFamily: {
        dmSans: ['var(--font-DMSans)', 'sans-serif'],
        clashDisplay: ['var(--font-clash-display)', 'sans-serif'],
        raleway: ['var(--font-raleway)', 'sans-serif'],
        spaceGrotesk: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
