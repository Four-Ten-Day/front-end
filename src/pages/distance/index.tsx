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

const Distance: NextPageWithLayout = () => {
  useRefreshRestore();

  return (
    <>
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
