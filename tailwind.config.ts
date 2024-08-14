import type { Config } from "tailwindcss";

const config: Config = {
  content: [
 "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity:'0'  },
          '50%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity:'1' },
        },
      },
      animation: {
        dropHope: 'dropFromTop 4s ease-in-out infinite',
        dropFutures: 'dropFromTop 4s ease-in-out 2s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
