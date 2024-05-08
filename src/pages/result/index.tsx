import { NextPageWithLayout } from '../_app';
import { useState } from 'react';
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

      <Map place={place} setMap={setMap} />
      <PlaceCarousel place={place} />
    </>
  );
};

export default Result;
