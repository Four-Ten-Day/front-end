import { selector } from 'recoil';
import { allModeStates, selectedModeState } from './atom';

export const selectedCategoriesByModeState = selector({
  key: 'selectedCategoriesByModeState',
  get: ({ get }) => {
    const selectedMode = get(selectedModeState);
    const modeFixtures = get(allModeStates);

    if (!selectedMode) return new Set<string>();

    return modeFixtures[selectedMode];
  },
});

export const isNoModeSelectedState = selector({
  key: 'isNoModeSelectedState',
  get: ({ get }) => {
    const selectedMode = get(selectedModeState);

    return !selectedMode;
  },
});
