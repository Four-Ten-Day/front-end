import { selectedCategoriesState } from '@/store/category/selectors';
import { selectedDistanceState } from '@/store/distance/atom';
import { positionState } from '@/store/position/atom';
import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

export type SearchResult = {
  data: kakao.maps.services.PlacesSearchResult;
  category: string;
};

const usePlaces = () => {
  const position = useRecoilValue(positionState);
  const categories = useRecoilValue(selectedCategoriesState);
  const distance = useRecoilValue(selectedDistanceState);

  const [places, setPlaces] = useState<SearchResult[]>([]);

  const popPlace = () => setPlaces([...places.slice(1)]);

  const services = kakao.maps.services;

  useEffect(() => {
    const getPlace = async () => {
      const placesPromises: Promise<SearchResult>[] = categories.map(
        (category) => {
          return new Promise((resolve) => {
            new services.Places().keywordSearch(
              category,
              (data) => {
                resolve({ data, category });
              },
              {
                x: position.lng,
                y: position.lat,
                radius: distance,
              }
            );
          });
        }
      );

      const results = await Promise.allSettled(placesPromises);

      const successfulResults = results
        .filter(
          (result): result is PromiseFulfilledResult<SearchResult> =>
            result.status === 'fulfilled'
        )
        .map((result) => result.value);
      const availablePlaces = successfulResults.filter(
        ({ data }) => data.length > 0
      );

      setPlaces(availablePlaces);
    };

    getPlace();
  }, [categories, distance, position, services]);

  return { places, popPlace };
};

export default usePlaces;
