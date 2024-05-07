import { selectedDistanceFixtureState } from '@/store/distance/selectors';
import { Map as KaKaoMap, MapMarker } from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';
import { SearchResult } from '../use-places';
import { positionState } from '@/store/position/atom';
import { Dispatch, SetStateAction } from 'react';
import * as S from './styles';

type MapProps = {
  place: SearchResult | undefined;
  setMap: Dispatch<SetStateAction<kakao.maps.Map | null>>;
};

const Map = ({ place, setMap }: MapProps) => {
  const { zoomLevel } = useRecoilValue(selectedDistanceFixtureState);
  const position = useRecoilValue(positionState);

  return (
    <S.Section>
      <S.Header>👀 주변 장소를 추천해줄게요 :)</S.Header>
      <KaKaoMap
        center={position}
        style={{ width: '100%', height: '400px' }}
        level={zoomLevel - 1}
        onCreate={(map: kakao.maps.Map) => setMap(map)}
      >
        {place?.data.map(({ x, y, id }) => (
          <MapMarker key={id} position={{ lat: +y, lng: +x }} />
        ))}
      </KaKaoMap>
    </S.Section>
  );
};

export default Map;
