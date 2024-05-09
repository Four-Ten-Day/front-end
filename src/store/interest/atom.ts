import { SELECTED_INTERESTS_KEY } from '@/lib/constants/local-storage-key';
import { atom } from 'recoil';
import { localStorageEffect } from '../effects/local-storage-effect';
import { InterestValue } from '@/fixtures/interest-fixture';

export const selectedInterestState = atom<InterestValue[]>({
  key: 'selectedInterestState',
  default: [],
  effects: [localStorageEffect<InterestValue[]>(SELECTED_INTERESTS_KEY)],
});
