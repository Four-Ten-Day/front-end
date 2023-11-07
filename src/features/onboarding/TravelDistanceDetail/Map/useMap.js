import { useEffect } from 'react';
const { kakao } = window;

export function useMap({ ref, isLoading, error, position, distance }) {
  useEffect(() => {
    if (isLoading || error) return;
    if (!kakao?.maps) return;

    let level;

    if (distance <= 250) {
      level = 5;
    } else if (distance <= 500) {
      level = 6;
    } else if (distance <= 1000) {
      level = 7;
    } else {
      level = 8;
    }

    const options = {
      center: new kakao.maps.LatLng(position?.lat, position?.lng),
      level: level,
    };

    const map = new kakao.maps.Map(ref.current, options);

    const circle = new kakao.maps.Circle({
      map: map,
      center: new kakao.maps.LatLng(position?.lat, position?.lng),
      radius: distance,
      strokeWeight: 1,
      strokeOpacity: 0.8,
      fillOpacity: 0.5,
    });

    console.log(distance);

    circle.setMap(map);
  }, [ref, isLoading, error, position, distance]);
}
