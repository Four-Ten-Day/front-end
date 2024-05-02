import { selector, selectorFamily } from 'recoil';
import { positionState } from '../distance/atom';
import { selectedCategoriesState } from '../category/selectors';
import { selectedDistanceFixtureState } from '../distance/selectors';
import { SearchResult, availablePlacesState } from './atom';

export const placesQuery = selector({
  key: 'placesQuery',
  get: async ({ get }) => {
    const position = get(positionState);
    const categories = get(selectedCategoriesState);
    const { distance } = get(selectedDistanceFixtureState);

    const placesPromises: Promise<SearchResult>[] = categories.map(
      (category) => {
        return new Promise((resolve) => {
          new kakao.maps.services.Places().keywordSearch(
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

    return availablePlaces;
  },
});

export const resultPlaceState = selector({
  key: 'resultPlaceState',
  get: ({ get }) => {
    const availablePlaces = get(availablePlacesState);

    return availablePlaces.at(0);
  },
});
