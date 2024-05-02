import { NextPageWithLayout } from '../_app';
import { ReactElement } from 'react';
import Category from '@/components/features/result/category';
import Map from '@/components/features/result/map';
import usePlaces from '@/components/features/result/use-places';

const Result: NextPageWithLayout = () => {
  const { places, popPlace } = usePlaces();
  const place = places.at(0);

  return (
    <>
      <Category place={place} popPlace={popPlace} />

      <Map place={place} />
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
