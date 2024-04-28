import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Jua } from 'next/font/google';

const jua = Jua({ subsets: ['latin'], weight: '400' });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main className={jua.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default App;
