import { selector } from 'recoil';
import { selectedCategoriesByModeState } from '../mode/selectors';
import { selectedCategoriesByInterestState } from '../interest/selectors';

export const selectedCategoriesState = selector({
  key: 'selectedCategoriesState',
  get: ({ get }) => {
    const categoriesByMode = get(selectedCategoriesByModeState);
    const categoriesByInterest = get(selectedCategoriesByInterestState);

    return [...categoriesByMode, ...categoriesByInterest];
  },
});
