import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as S from './styles';

type SliderProps = {
  children: ReactNode;
};

type SlidesContainerProps = {
  children: ReactNode[];
};

type LeftButtonProps = {
  children: ReactNode;
};

type RightButtonProps = {
  children: ReactNode;
};

type SlideContextType = {
  move: (direction: keyof typeof Directions) => void;
  slidesContainerRef: MutableRefObject<HTMLDivElement>;
  totalLength: number;
  setTotalLength: Dispatch<SetStateAction<number>>;
  slideIndex: number;
  setSlideIndex: Dispatch<SetStateAction<number>>;
};

const CarouselContext = createContext<SlideContextType>(null!);

export const Directions = {
  LEFT: -1,
  RIGHT: 1,
} as const;

const Carousel = ({ children }: SliderProps) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesContainerRef = useRef<HTMLDivElement>(null!);
  const [totalLength, setTotalLength] = useState<number>(0);

  const move = (direction: keyof typeof Directions) => {
    if (!totalLength) return;
    if (slideIndex + Directions[direction] < 0) return;
    if (slideIndex + Directions[direction] > totalLength - 1) return;

    setSlideIndex((prev) => prev + Directions[direction]);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        move('LEFT');
        break;
      case 'ArrowRight':
        move('RIGHT');
        break;
    }
  };

  return (
    <CarouselContext.Provider
      value={{
        move,
        slidesContainerRef,
        totalLength,
        slideIndex,
        setTotalLength,
        setSlideIndex,
      }}
    >
      <S.Carousel onKeyDown={(e) => handleKeyDown(e)}>{children}</S.Carousel>
    </CarouselContext.Provider>
  );
};

const SlidesContainer = ({ children }: SlidesContainerProps) => {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error('SlidesContainer must be used within SliderContext');

  const { slidesContainerRef, setTotalLength, slideIndex, setSlideIndex } =
    context;

  useEffect(() => {
    setTotalLength(children.length);
    setSlideIndex(0);
  }, [children, setSlideIndex, setTotalLength]);

  return (
    <S.SlidesContainer
      aria-live="polite"
      tabIndex={0}
      ref={slidesContainerRef}
      slideIndex={slideIndex}
    >
      {children.map((child, idx) => (
        <S.Slide key={idx} aria-hidden={idx !== slideIndex}>
          {child}
        </S.Slide>
      ))}
    </S.SlidesContainer>
  );
};

const LeftButton = ({ children }: LeftButtonProps) => {
  const context = useContext(CarouselContext);
  if (!context) throw new Error('LeftButton must be used within SliderContext');

  const { move, slideIndex } = context;

  if (slideIndex === 0) return null;

  return (
    <S.Button
      aria-label="캐루셀 왼쪽 이동"
      onClick={() => move('LEFT')}
      direction="LEFT"
    >
      {children}
    </S.Button>
  );
};

const RightButton = ({ children }: RightButtonProps) => {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error('RightButton must be used within SliderContext');

  const { move, slideIndex, totalLength } = context;

  if (slideIndex === totalLength - 1) return null;

  return (
    <S.Button
      aria-label="캐루셀 오른쪽 이동"
      onClick={() => move('RIGHT')}
      direction="RIGHT"
    >
      {children}
    </S.Button>
  );
};

Carousel.SlidesContainer = SlidesContainer;
Carousel.LeftButton = LeftButton;
Carousel.RightButton = RightButton;

export default Carousel;
