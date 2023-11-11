import * as S from './styles';

import Carousel from '../../../ui/carousel';
import PlaceCard from './place-card';
import PlaceMap from './place-map';
import { useState } from 'react';

function PlaceRecommendation() {
  const [recommendedPlaces, setRecommendedPlaces] = useState([]);

  function handleSetPlaces(places) {
    setRecommendedPlaces(places);
  }

  console.log(recommendedPlaces, '!@#@!');

  return (
    <>
      <S.PlaceRecommendation>
        <S.Span>👀주변 장소를 추천해줄게요 :)</S.Span>
      </S.PlaceRecommendation>

      <PlaceMap onLoaded={handleSetPlaces} />

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
