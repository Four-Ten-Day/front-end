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
      <S.Carousel>{children}</S.Carousel>
    </CarouselContext.Provider>
  );
};

function Content({ children }) {
  const { currentContent, contentWidth } = useContext(CarouselContext);

  return (
    <S.Window>
      <S.Content translatex={-1 * (contentWidth * currentContent)}>
        {children}
      </S.Content>
    </S.Window>
  );
}

Carousel.Content = Content;

export default Carousel;
