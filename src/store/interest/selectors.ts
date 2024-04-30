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
