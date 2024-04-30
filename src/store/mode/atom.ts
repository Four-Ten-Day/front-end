import { atom } from 'recoil';

export type ModeValue = null | 'alone' | 'together';

export const selectedModeState = atom<ModeValue>({
  key: 'modeState',
  default: null,
});
