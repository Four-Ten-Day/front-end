import { atom } from 'recoil';

export type Mode = null | 'alone' | 'together';

export const modeState = atom<Mode>({
  key: 'textState',
  default: null,
});
