import Carousel from '@/components/common-ui/carousel';
import { SearchResult } from '../use-places';

type PlaceCarouselProps = {
  place: SearchResult | undefined;
};

const PlaceCarousel = ({ place }: PlaceCarouselProps) => {
  if (!place) return null;

  const { data } = place;

  return (
    <div className="z-10 -translate-y-1/3 ">
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
              <Carousel.Slide key={id}>
                <div className="w-[354px] rounded-small bg-white/50 backdrop-blur-[10px] p-5 font-nanum-gothic shadow-[0_0_12px_0_rgba(0,0,0,0.25)]">
                  <div className="flex gap-2 items-baseline">
                    <span className="text-primary-01 text-b1 font-bold mb-4">
                      {place_name}
                    </span>
                    <span className="text-primary-02 text-b4">
                      {category_group_name}
                    </span>
                  </div>
                  <div className="mb-8">
                    <span className="text-primary-01 text-b2">
                      {road_address_name}
                    </span>
                  </div>

                  <span className="text-primary-01 text-b2 font-bold">
                    {distance}m
                  </span>
                </div>
              </Carousel.Slide>
            )
          )}
        </Carousel.SlidesContainer>

        <Carousel.LeftButton>{'<'}</Carousel.LeftButton>
        <Carousel.RightButton>{'>'}</Carousel.RightButton>
      </Carousel>
    </div>
  );
};

export default PlaceCarousel;
