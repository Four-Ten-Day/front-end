import { useEffect } from 'react';
import { useOnboarding } from '../../../../contexts/OnboardingContext';
import { intersectionSets } from '../../../../utils/set';

const { kakao } = window;

export function useMap({ ref, isLoading, error, position, onLoaded }) {
  const { isWithOther, selectedInterests, allInterests, modeConfig, trigger } =
    useOnboarding();

  const interestCategories = allInterests
    .filter((config) => selectedInterests.includes(config.value))
    .map((config) => config.categories);

  const unionedSet = interestCategories.reduce((acc, set) => {
    for (const item of set) {
      acc.add(item);
    }
    return acc;
  }, new Set());

  const modeCategories = isWithOther
    ? modeConfig['together']
    : modeConfig['alone'];

  const { distanceConfig, distanceConfigIndex } = useOnboarding();
  const { distance, zoomLevel } = distanceConfig[distanceConfigIndex];

  useEffect(() => {
    if (isLoading || error || !kakao?.maps || !position) return;

    const options = {
      center: new kakao.maps.LatLng(position.lat, position.lng),
      level: zoomLevel,
    };

    const map = new kakao.maps.Map(ref.current, options);
    const categories = [...intersectionSets(unionedSet, modeCategories)];
    const searchPromises = categories.map((category) => {
      return new Promise((resolve) => {
        const places = new kakao.maps.services.Places();

        places.keywordSearch(
          category,
          (data) => {
            resolve({ data, category });
          },
          {
            x: position.lng,
            y: position.lat,
            radius: distance,
          }
        );
      });
    });

    Promise.all(searchPromises).then((results) => {
      let maxCategoryData = [];

      let selectedCategory = null;

      results.forEach(({ data, category }) => {
        if (data.length >= 1 && Math.random() > 0.5) {
          maxCategoryData = data;
          selectedCategory = category;
        }
      });

      onLoaded(maxCategoryData.slice(0, 5), selectedCategory);

      maxCategoryData.slice(0, 5).forEach((place) => {
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });
      });
    });
  }, [ref, isLoading, error, position, distance, zoomLevel, onLoaded, trigger]);
}
