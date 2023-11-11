import { useRef } from 'react';
import { useGeolocation } from '../../../../hooks/useGeolocation';
import { useMap } from './useMap';
import * as S from './styles';
import useWindowSize from '../../../../hooks/useWindowSize';

function PlaceMap({ onLoaded, category }) {
  const mapContainerRef = useRef(null);
  const { isLoading, position, error } = useGeolocation();
  const windowSize = useWindowSize();
  useMap({
    ref: mapContainerRef,
    isLoading,
    error,
    position,
    onLoaded,
    category,
  });

  return (
    <S.MapContainer
      ref={mapContainerRef}
      width={windowSize.width}
      category={category}
    />
  );
}

export default PlaceMap;
