import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import ModeSelector from '@/components/features/mode/mode-selector';
import NextPageButton from '@/components/features/mode/next-page-button';
import useRefreshRestore from '@/hooks/use-refresh-restore';
import Header from '@/components/features/mode/header';
import Layout from '@/components/features/mode/layout';
import Head from 'next/head';

const Mode: NextPageWithLayout = () => {
  useRefreshRestore();

  return (
    <>
      <Head>
        <title>오놀 | 누구랑</title>
        <meta
          name="description"
          content="차분히 혼자 시간을 즐길지, 신나게 친구들과 놀지 선택해보세요."
        />
      </Head>

      <Ellipsis current={1} total={3} />
      <Header />
      <ModeSelector />
      <NextPageButton />
    </>
  );
};

Mode.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Mode;
