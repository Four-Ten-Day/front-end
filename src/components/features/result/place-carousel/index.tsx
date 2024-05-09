import Carousel from '@/components/common-ui/carousel';
import * as S from './styles';
import { nanumGothic } from '@/styles/fonts';
import { CategoryWithPlaces } from '@/services/get-place-info';

type PlaceCarouselProps = {
  place: CategoryWithPlaces | undefined;
};

const PlaceCarousel = ({ place }: PlaceCarouselProps) => {
  if (!place) return null;

  return (
    <S.PlaceCarousel>
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
                <S.Header>
                  <S.Place>{place_name}</S.Place>
                  <S.Category>{category_group_name}</S.Category>
                </S.Header>
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
