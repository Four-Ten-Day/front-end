import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import ModeSelector from '@/components/features/mode/mode-selector';
import NextPageButton from '@/components/features/mode/next-page-button';
import useRefreshRestore from '@/hooks/use-refresh-restore';
import Header from '@/components/features/mode/header';
import Layout from '@/components/features/mode/layout';

const Mode: NextPageWithLayout = () => {
  useRefreshRestore();

  return (
    <>
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
