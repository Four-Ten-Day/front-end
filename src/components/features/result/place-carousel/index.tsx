import Carousel from '@/components/common-ui/carousel';
import * as S from './styles';
import { nanumGothic } from '@/styles/fonts';
import { CategoryWithPlaces } from '@/services/get-place-info';
import { VisuallyHidden } from '@/components/common-ui/visually-hidden';

type PlaceCarouselProps = {
  place: CategoryWithPlaces | undefined;
};

const PlaceCarousel = ({ place }: PlaceCarouselProps) => {
  if (!place) return null;

  return (
    <S.PlaceCarousel aria-labelledby="place-recommendation">
      <VisuallyHidden>
        <h3 id="place-recommendation">주변 놀거리 추천</h3>
      </VisuallyHidden>

      <Carousel>
        <Carousel.SlidesContainer>
          {place.documents.map(
            ({
              id,
              distance,
              place_name,
              road_address_name,
              category_group_name,
            }) => (
              <S.SlideContent className={nanumGothic.className} key={id}>
                <S.Heading>
                  <S.Place>{place_name}</S.Place>
                  <S.Category>{category_group_name}</S.Category>
                </S.Heading>
                <S.Address>
                  {road_address_name} <br />
                </S.Address>
                <S.Distance>{distance}m</S.Distance>
              </S.SlideContent>
            )
          )}
        </Carousel.SlidesContainer>

        <Carousel.LeftButton>{'<'}</Carousel.LeftButton>
        <Carousel.RightButton>{'>'}</Carousel.RightButton>
      </Carousel>
    </S.PlaceCarousel>
  );
};

export default PlaceCarousel;
