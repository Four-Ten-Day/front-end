// components/Map.js
import { useRef } from 'react';
import { useGeolocation } from '../../../../hooks/useGeolocation';
import { useMap } from './useMap';

function Map() {
  const mapContainerRef = useRef(null);
  const { isLoading, position, error } = useGeolocation();

  useMap(mapContainerRef, isLoading, error, position); // ref를 useMap 훅에 전달합니다.

  return (
    <div ref={mapContainerRef} style={{ width: '500px', height: '500px' }} />
  );
}

export default Map;
