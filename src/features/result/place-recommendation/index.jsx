import * as S from './styles';

import Carousel from '../../../ui/carousel';
import PlaceCard from './place-card';
import PlaceMap from './place-map';
import { useCallback, useState } from 'react';

function PlaceRecommendation({ category }) {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);

  const handleSetPlaces = useCallback(function (places) {
    setRecommendedPlaces(places);
  }, []);

  console.log(recommendedPlaces.length);
  if (recommendedPlaces.length === 0) return <></>;

  return (
    <>
      <S.PlaceRecommendation>
        <S.Span>👀주변 장소를 추천해줄게요 :)</S.Span>
      </S.PlaceRecommendation>

      <PlaceMap onLoaded={handleSetPlaces} category={category} />

      <Carousel>
        <Carousel.Content>
          {recommendedPlaces.map((recommendedPlace) => (
            <PlaceCard place={recommendedPlace} key={recommendedPlace.id} />
          ))}
        </Carousel.Content>
      </Carousel>
    </>
  );
}
export default PlaceRecommendation;
