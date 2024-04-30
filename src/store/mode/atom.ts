import { atom } from 'recoil';

export type ModeValue = null | 'alone' | 'together';

export const modeState = atom<ModeValue>({
  key: 'modeState',
  default: null,
});
