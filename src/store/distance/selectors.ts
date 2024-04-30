import { selector } from 'recoil';
import { allDistanceState, selectedDistanceState } from './atom';

export const selectedDistanceFixtureState = selector({
  key: 'selectedDistanceFixtureState',
  get: ({ get }) => {
    const selectedDistance = get(selectedDistanceState);
    const distanceFixtures = get(allDistanceState);

    return distanceFixtures
      .filter(({ distance }) => distance === selectedDistance)
      .at(0)!;
  },
});
