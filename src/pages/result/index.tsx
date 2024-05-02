import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Category from '@/components/features/result/category';
import Map from '@/components/features/result/map';

const Result: NextPageWithLayout = () => {
  return (
    <>
      <Category />

      <Map />
    </>
  );
};

Result.getLayout = (page: ReactElement) => {
  return (
    <>
      <div className="flex flex-col gap-16 w-full -mt-[60px]">{page}</div>
    </>
  );
};

export default Result;
