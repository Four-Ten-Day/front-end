import { positionState } from '@/store/distance/atom';
import { selectedDistanceFixtureState } from '@/store/distance/selectors';
import { availablePlacesState } from '@/store/result/atom';
import { placesQuery, resultPlaceState } from '@/store/result/selectors';
import { useEffect } from 'react';
import { Map as KaKaoMap, MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const Map = () => {
  const { zoomLevel } = useRecoilValue(selectedDistanceFixtureState);
  const position = useRecoilValue(positionState);
  const placesResult = useRecoilValue(placesQuery);
  const setAvailablePlaces = useSetRecoilState(availablePlacesState);
  const resultPlace = useRecoilValue(resultPlaceState);

  useEffect(() => {
    setAvailablePlaces(placesResult);
  }, [placesResult, setAvailablePlaces]);

  // TODO: 없을 경우 디자인 수정
  if (!resultPlace) return <div>추천 가능한 곳이 없어요.</div>;

  return (
    <KaKaoMap
      center={position}
      style={{ width: '100%', height: '400px' }}
      level={zoomLevel}
    >
      {resultPlace.data.map(({ x, y, id }) => (
        <MapMarker key={id} position={{ lat: +y, lng: +x }} />
      ))}
    </KaKaoMap>
  );
};

export default Map;
