import { useEffect, useState } from 'react';

export type Position = {
  lat: number;
  lng: number;
};

const useGeoLocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [position, setPosition] = useState<Position>({
    lat: 33.5563,
    lng: 126.79581,
  });

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

  useEffect(() => {
    getPosition();
  }, []);

  return { isLoading, position, error, getPosition };
};

export default useGeoLocation;
