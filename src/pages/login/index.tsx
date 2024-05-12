import { getProviders, signIn } from 'next-auth/react';
import { NextPageWithLayout } from '../_app';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { getHomePagePath } from '@/lib/utils/paths';
import Button from '@/components/common-ui/button';
import { Layout } from '@/components/features/login/layout';

const Login: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ providers }) => {
  return (
    <Layout>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button
            size="L"
            variant="contained"
            onClick={() => signIn(provider.id)}
          >
            {provider.name}으로 로그인하기
          </Button>
        </div>
      ))}
    </Layout>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: getHomePagePath() } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
};

export default Login;
