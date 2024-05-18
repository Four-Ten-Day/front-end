import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import Map from '@/components/features/distance/map';
import Slider from '@/components/features/distance/slider';
import Label from '@/components/features/distance/label';
import NextPageButton from '@/components/features/distance/next-page-button';
import useRefreshRestore from '@/hooks/use-refresh-restore';
import Header from '@/components/features/distance/header';
import Layout from '@/components/features/distance/layout';
import Head from 'next/head';

const Distance: NextPageWithLayout = () => {
  useRefreshRestore();

  return (
    <>
      <Head>
        <title>오놀 | 이동 가능 거리</title>
        <meta
          name="description"
          content="이동할 수 있는 거리를 선택해보세요."
        />
        <meta
          name="keywords"
          content="이동 거리, 근처 놀거리, 가까운 곳 놀거리, 오놀"
        />
      </Head>

      <Ellipsis current={3} total={3} />
      <Header />
      <Map />
      <Label />
      <Slider />
      <NextPageButton />
    </>
  );
};

Distance.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Distance;
