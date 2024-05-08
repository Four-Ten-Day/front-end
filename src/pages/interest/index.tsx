import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import InterestSelector from '@/components/features/interest/interest-selector';
import NextPageButton from '@/components/features/interest/next-page-button';
import useRefreshRestore from '@/hooks/use-refresh-restore';
import Layout from '@/components/features/interest/layout';
import Header from '@/components/features/interest/header';
import Head from 'next/head';

const Interest: NextPageWithLayout = () => {
  useRefreshRestore();

  return (
    <>
      <Head>
        <title>오놀 | 어떤 기분을 느끼고 싶나요?</title>
        <meta
          name="description"
          content="오늘은 어떤 컨셉으로 놀고 싶은지 정해보세요."
        />
      </Head>
      <Ellipsis current={2} total={3} />
      <Header />
      <InterestSelector />
      <NextPageButton />
    </>
  );
};

Interest.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Interest;
