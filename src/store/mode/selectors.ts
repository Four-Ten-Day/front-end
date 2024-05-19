import { selector } from 'recoil';
import { selectedModeState } from './atom';
import { modeFixture } from '@/fixtures/mode-fixutre';

export const modeFixtureState = selector({
  key: 'modeFixtureState',
  get: () => {
    return modeFixture;
  },
});

export const selectedCategoriesByModeState = selector({
  key: 'selectedCategoriesByModeState',
  get: ({ get }) => {
    const selectedMode = get(selectedModeState);
    const modeFixture = get(modeFixtureState);

    if (!selectedMode) return new Set<string>();

    return modeFixture[selectedMode];
  },
});

export const isNoModeSelectedState = selector({
  key: 'isNoModeSelectedState',
  get: ({ get }) => {
    const selectedMode = get(selectedModeState);

    return !selectedMode;
  },
});
