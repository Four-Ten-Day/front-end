import React, { createContext, useContext, useState } from 'react';

import * as S from './styles';

const CarouselContext = createContext();

const Carousel = ({ children, contentLength, contentWidth }) => {
  const [currentContent, setCurrentContent] = useState(0);

  return (
    <CarouselContext.Provider
      value={{
        contentLength,
        currentContent,
        setCurrentContent,
        contentWidth,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

function Content({ children }) {
  const { currentContent, contentWidth, setCurrentContent, contentLength } =
    useContext(CarouselContext);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // 최소 스와이프 거리를 정의 (여기서는 50px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    e.preventDefault();
    setTouchEnd(null); // 이전 터치 종료 지점을 초기화
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd) return;
    e.preventDefault();

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipedLeft();
    } else if (isRightSwipe) {
      onSwipedRight();
    }
  };

  const onSwipedLeft = () => {
    console.log('Swiped left');
    setCurrentContent((prev) => (prev < contentLength - 1 ? prev + 1 : prev));
  };

  const onSwipedRight = () => {
    console.log('Swiped right');
    setCurrentContent((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <S.Window>
      <S.Content
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        translatex={-1 * currentContent}
      >
        {children}
      </S.Content>
    </S.Window>
  );
}

Carousel.Content = Content;

export default Carousel;
