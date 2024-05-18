import { NextPageWithLayout } from '../_app';
import { Layout } from '@/components/features/login/layout';
import Button from '@/components/common-ui/button';
import { useSession } from '@/context/session-context';
import Head from 'next/head';

const Login: NextPageWithLayout = () => {
  const { login } = useSession();

  return (
    <>
      <Head>
        <title>오놀 | 로그인</title>
        <meta
          name="description"
          content="오놀에 로그인하고 다양한 놀거리를 추천받아보세요."
        />
        <meta name="keywords" content="오놀 로그인" />
      </Head>

      <Layout>
        <Button size="L" variant="contained" onClick={() => login()}>
          Github으로 로그인
        </Button>
      </Layout>
    </>
  );
};

export default Login;
