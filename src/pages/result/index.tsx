import { NextPageWithLayout } from '../_app';
import { ReactElement, useState } from 'react';
import Category from '@/components/features/result/category';
import Map from '@/components/features/result/map';

import usePlaces from '@/components/features/result/use-places';
import PlaceCarousel from '@/components/features/result/place-carousel';
import useRefreshRestore from '@/hooks/use-refresh-restore';

const Result: NextPageWithLayout = () => {
  useRefreshRestore();
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const { places, popPlace } = usePlaces({ map });

  const place = places.at(0);

  return (
    <>
      <Category place={place} popPlace={popPlace} />

      <div className="flex flex-col">
        <Map place={place} setMap={setMap} />
        <PlaceCarousel place={place} />
      </div>
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
