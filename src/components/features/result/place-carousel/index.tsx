import Carousel from '@/components/common-ui/carousel';
import { SearchResult } from '../use-places';
import * as S from './styles';
import { nanumGothic } from '@/styles/fonts';

type PlaceCarouselProps = {
  place: SearchResult | undefined;
};

const PlaceCarousel = ({ place }: PlaceCarouselProps) => {
  if (!place) return null;

  const { data } = place;

  return (
    <S.PlaceCarousel>
      <Carousel>
        <Carousel.SlidesContainer>
          {data.map(
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
