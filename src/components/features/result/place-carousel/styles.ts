import { borderRadius, colors, fontSize } from '@/styles/theme';
import styled from '@emotion/styled';

export const PlaceCarousel = styled.section`
  position: relative;
  z-index: 100;
  transform: translateY(-33.33%);
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 354px;
  border-radius: ${borderRadius.small};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  padding: 20px;
`;

export const Heading = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

export const Place = styled.h4`
  color: ${colors.primary01};
  font-size: ${fontSize.b1};
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Category = styled.span`
  color: ${colors.primary02};
  font-size: ${fontSize.b4};
`;

export const Address = styled.span`
  color: ${colors.primary01};
  font-size: ${fontSize.b2};
  margin-bottom: 8px;
`;

export const Distance = styled.span`
  color: ${colors.primary01};
  font-size: ${fontSize.b2};
  font-weight: bold;
`;
