import useGeoLocation from '@/hooks/use-geolocation';
import { selectedDistanceState } from '@/store/distance/atom';
import { selectedDistanceFixtureState } from '@/store/distance/selectors';
import { Circle, Map as KaKaoMap } from 'react-kakao-maps-sdk';
import { useRecoilValue } from 'recoil';

const Map = () => {
  const { position } = useGeoLocation();
  const { distance, zoomLevel } = useRecoilValue(selectedDistanceFixtureState);

  return (
    <KaKaoMap
      center={position}
      style={{ width: '100%', height: '232px' }}
      level={zoomLevel}
      zoomable={false}
      draggable={false}
    >
      <Circle
        center={position}
        radius={distance}
        strokeWeight={1}
        strokeColor={'#1BCCBA'}
        strokeOpacity={1}
        strokeStyle={'solid'}
        fillColor={'#1BCCBA'}
        fillOpacity={0.25}
      />
    </KaKaoMap>
  );
};

export default Map;
