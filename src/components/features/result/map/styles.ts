import { fontSize } from '@/styles/theme';
import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.h2`
  font-size: ${fontSize.h3};
  font-weight: 400;
`;
