import { atom } from 'recoil';

type Distance = 250 | 500 | 1000 | 2000;

type DistanceLabel = '250m 이내' | '500m 이내' | '1km 이내' | '1km 이상';

type ZoomLevel = 5 | 6 | 7 | 8;

type DistanceFixture = {
  distance: Distance;
  label: DistanceLabel;
  zoomLevel: ZoomLevel;
};

export type Position = {
  lat: number;
  lng: number;
};

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
});

export const allDistanceState = atom({
  key: 'allDistanceState',
  default: distanceFixtures,
});

export const positionState = atom<Position>({
  key: 'positionState',
  default: {
    lat: 37.53,
    lng: 127.02,
  },
});
