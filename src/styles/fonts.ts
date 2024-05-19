import { Jua, Nanum_Gothic } from 'next/font/google';

export const jua = Jua({ subsets: ['latin'], weight: '400', display: 'swap' });
export const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
});
