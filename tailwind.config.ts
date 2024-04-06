import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        haaslight: ['NeueHaasDisplayLight', 'sans-serif'],
        haasroman: ['NeueHaasDisplayRoman', 'sans-serif'],
        haasxxt: ['NeueHaasDisplayXXThin', 'sans-serif'],
        haasxt: ['NeueHaasDisplayXThin', 'sans-serif'],
        haast: ['NeueHaasDisplayThin', 'sans-serif'],
      },
      colors: {
        lgray: '#3F3F3F',
        dgray: '#1B1B1B',
      },
      backgroundImage: {
        noised: "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
