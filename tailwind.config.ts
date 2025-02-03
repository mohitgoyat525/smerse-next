import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg-img": "url('/assets/images/webp/hero-bg-img.webp')",
        "hero-bg-img-xl": "url('/assets/images/webp/hero-bg-img-xl.webp')",
        "hero-bg-img-md": "url('/assets/images/webp/hero-bg-md-img.webp')",
      },
      colors: {
        "light-purple": "#952FFE",
        "light-pink": "#C641C6",
        "light-orange": "#FF676B",
        "dark-blue": "#0A0A2B",
      },
    },
  },
  plugins: [],
} satisfies Config;
