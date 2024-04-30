import { selector } from 'recoil';
import { allInterestsState, selectedInterestState } from './atom';

export const isAllInterestsSelectedState = selector({
  key: 'isAllInterestsSelectedState',
  get: ({ get }) => {
    const selectedInterests = get(selectedInterestState);
    const allInterests = get(allInterestsState);

    return allInterests.length === selectedInterests.length;
  },
});

export const isNoInterestSelectedState = selector({
  key: 'isNoInterestSelected',
  get: ({ get }) => {
    const selectedInterests = get(selectedInterestState);

    return selectedInterests.length === 0;
  },
});
