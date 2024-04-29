import { ReactNode } from 'react';

import { Jua, Nanum_Gothic } from 'next/font/google';

const jua = Jua({ subsets: ['latin'], weight: '400', variable: '--font-jua' });
const nanumGothic = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-nanum-gothic',
});

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen xs:flex xs:justify-center">
      <main
        className={`flex flex-col items-center w-full py-[60px] ${jua.variable} ${nanumGothic.variable} font-sans xs:max-w-screen-xs`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
