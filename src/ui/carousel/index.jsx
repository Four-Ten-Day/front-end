import React, { createContext } from 'react';

import * as S from './styles';

export const TOTAL_STEPS = 3;

const CarouselContext = createContext();

const Carousel = ({ children }) => {
  return (
    <CarouselContext.Provider value={{}}>{children}</CarouselContext.Provider>
  );
};

function Title({ children }) {
  return <S.Title as="h1">{children}</S.Title>;
}

function Content({ children }) {
  return <S.Content>{children}</S.Content>;
}

Carousel.Title = Title;
Carousel.Content = Content;

export default Carousel;
