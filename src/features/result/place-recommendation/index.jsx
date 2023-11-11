import * as S from './styles';

import Carousel from '../../../ui/carousel';
import PlaceCard from './place-card';
import PlaceMap from './place-map';

function PlaceRecommendation({ onLoaded, recommendedPlaces }) {
  return (
    <>
      <S.PlaceRecommendation>
        <S.Span>👀주변 장소를 추천해줄게요 :)</S.Span>
      </S.PlaceRecommendation>

      <PlaceMap onLoaded={onLoaded} />

      <S.CarouselWrapper>
        <Carousel contentWidth={335}>
          <Carousel.Content>
            {recommendedPlaces.map((recommendedPlace) => (
              <PlaceCard place={recommendedPlace} key={recommendedPlace.id} />
            ))}
          </Carousel.Content>
        </Carousel>
      </S.CarouselWrapper>
    </>
  );
}

export default PlaceRecommendation;
