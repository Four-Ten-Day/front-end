import { positionState } from '@/store/distance/atom';
import { selectedDistanceFixtureState } from '@/store/distance/selectors';
import { Map as KaKaoMap, MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';
import { SearchResult } from '../use-places';

type MapProps = {
  place: SearchResult | undefined;
};

const Map = ({ place }: MapProps) => {
  const { zoomLevel } = useRecoilValue(selectedDistanceFixtureState);
  const position = useRecoilValue(positionState);

  if (!place) return null;

  return (
    <>
      <h2>👀 주변 장소를 추천해줄게요 :)</h2>
      <KaKaoMap
        center={position}
        style={{ width: '100%', height: '400px' }}
        level={zoomLevel}
      >
        {place.data.map(({ x, y, id }) => (
          <MapMarker key={id} position={{ lat: +y, lng: +x }} />
        ))}
      </KaKaoMap>
    </>
  );
};

export default Map;
