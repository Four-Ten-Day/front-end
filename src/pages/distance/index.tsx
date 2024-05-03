import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Ellipsis from '@/components/common-ui/ellipsis';
import Map from '@/components/features/distance/map';
import Slider from '@/components/features/distance/slider';
import Label from '@/components/features/distance/label';
import NextPageButton from '@/components/features/distance/next-page-button';
import useRefreshRestore from '@/hooks/use-refresh-restore';

const Distance: NextPageWithLayout = () => {
  useRefreshRestore();

  return (
    <>
      <h1 className="text-h1 text-center">
        지금 내 위치에서
        <br />
        이동할 수 있는 거리를 알려주세요
      </h1>

      <section className="flex flex-col gap-6 items-center justify-center">
        <Map />
        <Label />
        <Slider />
      </section>

      <NextPageButton />
    </>
  );
};

Distance.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="mb-[72px]">
        <Ellipsis current={3} total={3} />
      </div>

      <div className="flex flex-col gap-4 w-full mb-40">{page}</div>
    </>
  );
};

export default Distance;
