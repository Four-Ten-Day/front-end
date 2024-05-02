import { atom } from 'recoil';

export type SearchResult = {
  data: kakao.maps.services.PlacesSearchResult;
  category: string;
};

export const availablePlacesState = atom<SearchResult[]>({
  key: 'availablePlacesState',
  default: [],
});
