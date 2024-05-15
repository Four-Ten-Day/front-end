import Layout from '@/components/common-ui/layout';
import { SessionProvider } from '@/context/session-context';
import GlobalStyle from '@/styles/global-style';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <SessionProvider>
        <GlobalStyle />
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </SessionProvider>
    </RecoilRoot>
  );
};

export default App;
