import Layout from '@/components/common-ui/layout';
import GlobalStyle from '@/styles/global-style';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { SessionProvider } from 'next-auth/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <RecoilRoot>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </SessionProvider>
    </RecoilRoot>
  );
};

export default App;
