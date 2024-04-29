import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '393px',
      },
      fontFamily: {
        sans: ['var(--font-jua)'],
        'nanum-gothic': ['var(--font-nanum-gothic)'],
      },
      colors: {
        'primary-01': '#020202',
        'primary-02': '#757575',
        'primary-03': '#959595',
        'primary-04': '#D2D2D2',
        'primary-05': '#F3F3F3',
        'primary-06': '#FFFFFF',
        'secondary-01': '#FFC43D',
        'secondary-02': '#F72585',
        'secondary-03': '#7209B7',
        'secondary-04': '#1BCCBA',
      },
      fontSize: {
        h1: ['28px', '28px'],
        h2: ['24px', '24px'],
        h3: ['18px', '18px'],
        h4: ['16px', '16px'],
        t1: ['24px', '24px'],
        t2: ['20px', '20px'],
        b1: ['18px', '18px'],
        b2: ['16px', '16px'],
        b3: ['14px', '14px'],
        b4: ['12px', '12px'],
      },
      borderRadius: {
        small: '15px',
        medium: '20px',
        large: '50px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
