import Layout from '@/components/common-ui/layout';
import { SessionProvider } from '@/context/session-context';
import GlobalStyle from '@/styles/global-style';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
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
    <>
      <Head>
        <meta property="og:title" content="오놀" />
        <meta
          property="og:url"
          content="https://o-nol-git-next-park-wan-seobs-projects.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/xmPKRyD/real-host.png"
        />
        <meta
          property="og:description"
          content="오늘 뭐하고 놀지 고민된다면 랜덤으로 추천해줄게요!"
        />
      </Head>

      <RecoilRoot>
        <SessionProvider>
          <GlobalStyle />
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </SessionProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
