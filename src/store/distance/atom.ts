import { atom } from 'recoil';
import { localStorageEffect } from '../effects/local-storage-effect';
import { SELECTED_DISTANCE_KEY } from '@/lib/constants/local-storage-key';

type Distance = 250 | 500 | 1000 | 2000;

type DistanceLabel = '250m 이내' | '500m 이내' | '1km 이내' | '1km 이상';

type ZoomLevel = 5 | 6 | 7 | 8;

type DistanceFixture = {
  distance: Distance;
  label: DistanceLabel;
  zoomLevel: ZoomLevel;
};

// TODO : fixture 수정 방지해야되는데 그냥 selector로 뺀다?? 고민
const distanceFixtures: DistanceFixture[] = [
  {
    distance: 250,
    label: '250m 이내',
    zoomLevel: 5,
  },
  {
    distance: 500,
    label: '500m 이내',
    zoomLevel: 6,
  },
  {
    distance: 1000,
    label: '1km 이내',
    zoomLevel: 7,
  },
  {
    distance: 2000,
    label: '1km 이상',
    zoomLevel: 8,
  },
];

export const selectedDistanceState = atom<Distance>({
  key: 'distanceState',
  default: distanceFixtures[0].distance,
  effects: [localStorageEffect<Distance>(SELECTED_DISTANCE_KEY)],
});

export const allDistanceState = atom({
  key: 'allDistanceState',
  default: distanceFixtures,
});
