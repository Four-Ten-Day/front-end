// components/Map.js
import { useRef } from 'react';
import { useGeolocation } from '../../../../hooks/useGeolocation';
import { useMap } from './useMap';
import * as S from './styles';
import useWindowSize from '../../../../hooks/useWindowSize';

function Map({ distance }) {
  const mapContainerRef = useRef(null);
  const { isLoading, position, error } = useGeolocation();
  const windowSize = useWindowSize();

  useMap({ ref: mapContainerRef, isLoading, error, position, distance });

  return <S.MapContainer ref={mapContainerRef} width={windowSize.width} />;
}

export default Map;
