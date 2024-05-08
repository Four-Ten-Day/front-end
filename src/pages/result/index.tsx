import { NextPageWithLayout } from '../_app';
import { useState } from 'react';
import Category from '@/components/features/result/category';
import Map from '@/components/features/result/map';
import usePlaces from '@/components/features/result/use-places';
import PlaceCarousel from '@/components/features/result/place-carousel';
import useRefreshRestore from '@/hooks/use-refresh-restore';
import Head from 'next/head';

const Result: NextPageWithLayout = () => {
  useRefreshRestore();
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const { places, popPlace } = usePlaces({ map });

  const place = places.at(0);

  return (
    <>
      <Head>
        <title>오놀 | 추천 놀거리</title>
        <meta name="description" content="추천해준 장소로 떠나보세요." />
      </Head>
      <Category place={place} popPlace={popPlace} />
      <Map place={place} setMap={setMap} />
      <PlaceCarousel place={place} />
    </>
  );
};

export default Result;
