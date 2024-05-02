import { Position, positionState } from '@/store/distance/atom';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

const useGeoLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useRecoilState<Position>(positionState);

  useEffect(() => {
    const getPosition = () => {
      if (!navigator.geolocation)
        return setError('Your browser does not support geolocation');

      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    };
    getPosition();
  }, [setPosition]);

  return { isLoading, position, error };
};

export default useGeoLocation;
