import { selector } from 'recoil';
import { allInterestsState, selectedInterestState } from './atom';

export const selectedCategoriesByInterestState = selector({
  key: 'selectedCategoriesByInterestState',
  get: ({ get }) => {
    const selectedInterests = get(selectedInterestState);
    const interestFixtures = get(allInterestsState);

    return new Set(
      interestFixtures
        .filter(({ value }) => selectedInterests.includes(value))
        .map(({ categories }) => categories)
        .flatMap((set) => Array.from(set))
    );
  },
});

export const isAllInterestsSelectedState = selector({
  key: 'isAllInterestsSelectedState',
  get: ({ get }) => {
    const selectedInterests = get(selectedInterestState);
    const allInterests = get(allInterestsState);

    return allInterests.length === selectedInterests.length;
  },
});

export const isNoInterestSelectedState = selector({
  key: 'isNoInterestSelectedState',
  get: ({ get }) => {
    const selectedInterests = get(selectedInterestState);

    return selectedInterests.length === 0;
  },
});
