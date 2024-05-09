import { SELECTED_MODE_KEY } from '@/lib/constants/local-storage-key';
import { atom } from 'recoil';
import { localStorageEffect } from '../effects/local-storage-effect';

export type ModeValue = null | 'alone' | 'together';

export const selectedModeState = atom<ModeValue>({
  key: 'modeState',
  default: null,
  effects: [localStorageEffect<ModeValue>(SELECTED_MODE_KEY)],
});

