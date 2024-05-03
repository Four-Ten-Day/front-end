import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import ModeSelector from '@/components/features/mode/mode-selector';
import NextPageButton from '@/components/features/mode/next-page-button';

const Mode: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="text-h1 text-center">오늘은 혼자 놀기? 같이 놀기?</h1>

      <section className="flex gap-4">
        <ModeSelector />
      </section>

      <NextPageButton />
    </>
  );
};

Mode.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="mb-[72px]">
        <Ellipsis current={1} total={3} />
      </div>

      <div className="flex flex-col gap-16 px-5">{page}</div>
    </>
  );
};

export default Mode;
