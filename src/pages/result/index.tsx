import { NextPageWithLayout } from '../_app';
import { useEffect, useState } from 'react';
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
import Router from 'next/router';
import Loader from '@/components/features/result/loader';

const Result: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ placeInformations }) => {
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isFakeLoading, setIsFakeLoading] = useState(true);
  const [categoriesWithPlaces, setcategoriesWithPlaces] =
    useState(placeInformations);

  const place = categoriesWithPlaces.at(0);
  const popPlace = () =>
    setcategoriesWithPlaces([...categoriesWithPlaces.slice(1)]);

  useRefreshRestore();

  useEffect(() => {
    setTimeout(() => setIsFakeLoading(false), 3000);
  }, []);

  useEffect(() => {
    const routeEventStart = () => setIsPageLoading(true);
    const routeEventEnd = () => setIsPageLoading(false);

    Router.events.on('routeChangeStart', routeEventStart);
    Router.events.on('routeChangeComplete', routeEventEnd);
    Router.events.on('routeChangeError', routeEventEnd);

    return () => {
      Router.events.off('routeChangeStart', routeEventStart);
      Router.events.off('routeChangeComplete', routeEventEnd);
      Router.events.off('routeChangeError', routeEventEnd);
    };
  }, []);

  if (isPageLoading || isFakeLoading) return <Loader />;

  return (
    <>
      <Head>
        <title>오놀 | 추천 놀거리</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Category place={place} popPlace={popPlace} />
      <Map place={place} />
      <PlaceCarousel place={place} />
    </>
  );
};

export const getServerSideProps = (async ({ query }) => {
  const { mode, interests, distance, lat, lng } = query;

  const modeCategories = !mode
    ? new Set<string>()
    : modeFixture[mode as NonNullable<ModeValue>];

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
