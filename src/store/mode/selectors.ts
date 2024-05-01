import { selector } from 'recoil';
import { allModeStates, selectedModeState } from './atom';

export const selectedCategoriesByModeState = selector({
  key: 'selectedCategoriesByModeState',
  get: ({ get }) => {
    const selectedMode = get(selectedModeState);
    const modeFixtures = get(allModeStates);

    return modeFixtures[selectedMode!];
  },
});

export const isNoModeSelectedState = selector({
  key: 'isNoModeSelectedState',
  get: ({ get }) => {
    const selectedMode = get(selectedModeState);

    return !selectedMode;
  },
});
