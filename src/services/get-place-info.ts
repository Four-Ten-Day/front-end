type PlaceInfo = {
  address_name: string;
  category_group_code?: string;
  category_group_name?: string;
  category_name: string;
  distance: string;
  id: string;
  phone?: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

export type CategoryWithPlaces = {
  documents: PlaceInfo[];
  category: string;
};

type getPlaceInfoProps = {
  query: string;
  lat: string;
  lng: string;
  distance: string;
};

export const getPlaceInfo = async ({
  query,
  distance,
  lat,
  lng,
}: getPlaceInfoProps): Promise<CategoryWithPlaces> => {
  const response = await fetch(
    `http://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&page=1&size=15&x=${lng}&y=${lat}&radius=${distance}`,
    {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_MAP_KEY}`,
        KA: 'sdk/v2 os/javascript lang/ko device/web origin/http://localhost:3000',
        'Content-Type': 'application/json;charset=UTF-8',
      },
    }
  );

  if (!response.ok) throw new Error();

  const data = await response.json();

  return {
    ...data,
    category: query,
  };
};
