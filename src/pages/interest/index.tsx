import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import InterestSelector from '@/components/features/interest/interest-selector';
import NextPageButton from '@/components/features/interest/next-page-button';
import useRefreshRestore from '@/hooks/use-refresh-restore';
import Layout from '@/components/features/interest/layout';
import Header from '@/components/features/interest/header';

const Interest: NextPageWithLayout = () => {
  useRefreshRestore();

  return (
    <>
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
