import { useCallback, useEffect } from 'react';
import { useOnboarding } from '../../../../contexts/OnboardingContext';

const { kakao } = window;

export function useMap({ ref, isLoading, error, position, onLoaded }) {
  const { distanceConfig, distanceConfigIndex } = useOnboarding();
  const { distance, zoomLevel } = distanceConfig[distanceConfigIndex];

  const searchPlaces = useCallback(
    (map) => {
      const places = new kakao.maps.services.Places();

      places.keywordSearch(
        '영화',
        (data, status) => {
          if (status === kakao.maps.services.Status.OK) {
            console.log(data);
            onLoaded(data);

            data.forEach((place) => {
              new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
              });
            });
          }
        },
        {
          x: position.lng,
          y: position.lat,
          radius: distance,
        }
      );
    },
    [distance, position?.lng, position?.lat]
  );

  useEffect(() => {
    if (isLoading || error) return;
    if (!kakao?.maps || !position) return;

    const options = {
      center: new kakao.maps.LatLng(position.lat, position.lng),
      level: zoomLevel,
    };

    const map = new kakao.maps.Map(ref.current, options);

    searchPlaces(map);
  }, [ref, isLoading, error, position, distance, zoomLevel, searchPlaces]);
}
