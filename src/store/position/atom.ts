import { POSITION_KEY } from '@/lib/constants/local-storage-key';
import { atom } from 'recoil';
import { localStorageEffect } from '../effects/local-storage-effect';

export type Position = {
  lat: number;
  lng: number;
};

export const positionState = atom<Position>({
  key: 'positionState',
  default: {
    lat: 37.53,
    lng: 127.02,
  },
  effects: [localStorageEffect<Position>(POSITION_KEY)],
});
