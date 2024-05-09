import { selector } from 'recoil';
import { selectedInterestState } from './atom';
import { interestFixture } from '@/fixtures/interest-fixture';

export const interestFixtureState = selector({
  key: 'interestFixtureState',
  get: () => interestFixture,
});

export const selectedCategoriesByInterestState = selector({
  key: 'selectedCategoriesByInterestState',
  get: ({ get }) => {
    const selectedInterests = get(selectedInterestState);
    const interestFixture = get(interestFixtureState);

    return new Set(
      interestFixture
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
    const interestFixture = get(interestFixtureState);

    return interestFixture.length === selectedInterests.length;
  },
});

export const isNoInterestSelectedState = selector({
  key: 'isNoInterestSelectedState',
  get: ({ get }) => {
    const selectedInterests = get(selectedInterestState);

    return selectedInterests.length === 0;
  },
});
