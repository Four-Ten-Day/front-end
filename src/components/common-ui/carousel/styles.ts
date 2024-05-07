import styled from '@emotion/styled';
import { Directions } from '.';

export const Carousel = styled.div`
  position: relative;
  overflow: hidden;
`;

export const SlidesContainer = styled.div<{ slideIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ slideIndex }) => `translateX(-${slideIndex * 100}%)`};
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%;
  max-width: 100%;
`;

export const Button = styled.button<{ direction: keyof typeof Directions }>`
  position: absolute;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'LEFT' ? 'left: 0;' : 'right: 0;')}
`;
