import { useRef } from 'react';
import { useGeolocation } from '../../../hooks/useGeolocation';
import useWindowSize from '../../../hooks/useWindowSize';

import * as S from './styles';

import Carousel from '../../../ui/carousel';
import PlaceCard from './place-card';

function PlaceRecommendation() {
  const mapContainerRef = useRef(null);
  const { isLoading, position, error } = useGeolocation();
  const windowSize = useWindowSize();

  return (
    <>
      <S.PlaceRecommendation>
        <S.Span>👀주변 장소를 추천해줄게요 :)</S.Span>
      </S.PlaceRecommendation>

      <div
        ref={mapContainerRef}
        width={windowSize.width}
        style={{ height: '300px' }}
      />

      <Carousel>
        <Carousel.Content>
          {[...new Array(7)].map((_) => (
            <PlaceCard />
          ))}
        </Carousel.Content>
      </Carousel>
    </>
  );
}
export default PlaceRecommendation;
