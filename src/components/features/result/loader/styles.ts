import { colors, fontSize } from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  background-color: ${colors.primary06};
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Heading = styled.h1`
  white-space: nowrap;
  font-size: ${fontSize.h1};
`;

export const dot = styled.span`
  white-space: nowrap;
  font-size: ${fontSize.h1};
`;

export const Span = styled.span`
  font-size: ${fontSize.b1};
`;
