import { borderRadius, boxShadow, colors, fontSize } from '@/styles/theme';
import styled from '@emotion/styled';
import Image from 'next/image';

export const Category = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 600px;
  position: relative;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  z-index: -10;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: ${borderRadius.large};
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: ${boxShadow.topSm};
  backdrop-filter: blur(10px);
  width: 353px;
  height: fit-content;
  margin-top: 64px;
`;

export const CategoryTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Subtitle = styled.span`
  font-family: 'Nanum Gothic', sans-serif;
  font-size: ${fontSize.b3};
  color: ${colors.primary02};
  font-weight: bold;
`;

export const Title = styled.span`
  font-size: ${fontSize.h1};
  color: ${colors.primary01};
  font-weight: 400;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ButtonSpan = styled.span`
  font-weight: 400;
  font-size: ${fontSize.h4};
`;

export const NoPlaceHeadig = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
