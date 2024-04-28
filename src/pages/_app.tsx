import Layout from '@/components/layout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Jua } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';

const jua = Jua({ subsets: ['latin'], weight: '400' });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Layout>
      <div className={jua.className}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </Layout>
  );
};

export default App;
