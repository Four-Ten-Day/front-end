import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import LandingAnimation from '@/components/common-ui/lading-animation';
import Logo from '@/components/features/home/logo';
import MessageSection from '@/components/features/home/section';
import Nav from '@/components/features/home/nav';
import { Layout } from '@/components/features/home/layout';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Logo />
      <MessageSection />
      <Nav />
      <LandingAnimation />
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
