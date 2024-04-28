import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-01': '#020202',
        'primary-02': '#757575',
        'primary-03': '#959595',
        'primary-04': '#D2D2D2',
        'primary-05': '#F3F3F3',
        'secondary-01': '#FFC43D',
        'secondary-02': '#F72585',
        'secondary-03': '#7209B7',
        'secondary-04': '#1BCCBA',
      },
    },
  },
  plugins: [],
};
export default config;
