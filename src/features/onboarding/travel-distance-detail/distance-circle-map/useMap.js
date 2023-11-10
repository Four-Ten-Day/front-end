import { useEffect } from 'react';
import { useOnboarding } from '../../../../contexts/OnboardingContext';
const { kakao } = window;

export function useMap({ ref, isLoading, error, position }) {
  const { distanceConfig, distanceConfigIndex } = useOnboarding();
  const { distance, zoomLevel } = distanceConfig[distanceConfigIndex];

  useEffect(() => {
    if (isLoading || error) return;
    if (!kakao?.maps) return;

    const options = {
      center: new kakao.maps.LatLng(position?.lat, position?.lng),
      level: zoomLevel,
    };

    const map = new kakao.maps.Map(ref.current, options);

    const circle = new kakao.maps.Circle({
      map: map,
      center: new kakao.maps.LatLng(position?.lat, position?.lng),
      radius: distance,
      strokeWeight: 1,
      fillOpacity: 0.25,
      fillColor: '#1BCCBA',
      strokeColor: '#1BCCBA',
      strokeOpacity: 1,
    });

    circle.setMap(map);
  }, [ref, isLoading, error, position, distance, zoomLevel]);
}
