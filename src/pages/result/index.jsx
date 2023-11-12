import { useCallback, useState } from 'react';

import PlaceRecommendation from '../../features/result/place-recommendation';
import ResultDetail from '../../features/result/result-detail';
import FakeLoader from '../../ui/fake-loader';

function Result() {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);
  const [recommendedCategory, setRecommendedCategory] = useState();

  const handleSetPlaces = useCallback(function (places, category) {
    setRecommendedPlaces(places);
    setRecommendedCategory(category);
  }, []);

  return (
    <>
      <ResultDetail category={recommendedCategory} />

      <PlaceRecommendation
        onLoaded={handleSetPlaces}
        recommendedPlaces={recommendedPlaces}
      />

      <FakeLoader loadingTime={300000} />
    </>
  );
}
export default Result;
