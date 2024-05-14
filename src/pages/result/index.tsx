import { NextPageWithLayout } from '../_app';
import { useState } from 'react';
import Category from '@/components/features/result/category';
import Map from '@/components/features/result/map';
import PlaceCarousel from '@/components/features/result/place-carousel';
import useRefreshRestore from '@/hooks/use-refresh-restore';
import Head from 'next/head';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { modeFixture } from '@/fixtures/mode-fixutre';
import { ModeValue } from '@/store/mode/atom';
import { interestFixture } from '@/fixtures/interest-fixture';
import { CategoryWithPlaces, getPlaceInfo } from '@/services/get-place-info';

const Result: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ placeInformations }) => {
  useRefreshRestore();

  const [categoriesWithPlaces, setcategoriesWithPlaces] =
    useState(placeInformations);

  const place = categoriesWithPlaces.at(0);
  const popPlace = () =>
    setcategoriesWithPlaces([...categoriesWithPlaces.slice(1)]);

  return (
    <>
      <Head>
        <title>오놀 | 추천 놀거리</title>
        <meta name="description" content="추천해준 장소로 떠나보세요." />
      </Head>
      <Category place={place} popPlace={popPlace} />
      <Map place={place} />
      <PlaceCarousel place={place} />
    </>
  );
};

export const getServerSideProps = (async ({ query }) => {
  const { mode, interests, distance, lat, lng } = query;
  let modeCategories = modeFixture[(mode as ModeValue)!];

  const interestsCategories = interestFixture
    .filter(({ value }) => interests?.includes(value))
    .map(({ categories }) => categories)
    .reduce(
      (accumulator, currentSet) => new Set([...accumulator, ...currentSet]),
      new Set()
    );

  const categories = [...new Set([...modeCategories, ...interestsCategories])];

  const promises = categories.map(async (category) => {
    return getPlaceInfo({
      query: category,
      lat: lat as string,
      lng: lng as string,
      distance: distance as string,
    });
  });

  const results = (await Promise.allSettled(promises))
    .filter(
      (result): result is PromiseFulfilledResult<CategoryWithPlaces> =>
        result.status === 'fulfilled' && result.value.documents.length > 0
    )
    .map((result) => result.value);

  return { props: { placeInformations: results } };
}) satisfies GetServerSideProps<{}>;

export default Result;
