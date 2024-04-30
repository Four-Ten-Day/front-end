import { selector } from 'recoil';
import { selectedModeState } from './atom';

export const isNoModeSelectedState = selector({
  key: 'isNoModeSelected',
  get: ({ get }) => {
    const selectedMode = get(selectedModeState);

    return !selectedMode;
  },
});
