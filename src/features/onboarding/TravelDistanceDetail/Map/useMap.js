import { useEffect } from 'react';

const { kakao } = window;

export function useMap(ref, isLoading, error, position) {
  useEffect(() => {
    if (isLoading || error || !ref.current) return;
    if (!kakao.maps) return;

    const options = {
      center: new kakao.maps.LatLng(position?.lat, position?.lng),
      level: 3,
    };

    const map = new kakao.maps.Map(ref.current, options);

    const circle = new kakao.maps.Circle({
      map: map,
      center: new kakao.maps.LatLng(position?.lat, position?.lng),
      radius: 100,
      strokeWeight: 2,
      strokeColor: '#FF00FF',
      strokeOpacity: 0.8,
      strokeStyle: 'dashed',
      fillColor: '#00EEEE',
      fillOpacity: 0.5,
    });

    circle.setMap(map);
  }, [ref, isLoading, error, position]);
}
