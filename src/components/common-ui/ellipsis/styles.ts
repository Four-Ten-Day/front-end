import { borderRadius, colors } from '@/styles/theme';
import styled from '@emotion/styled';

export const Ellipsis = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Dot = styled.div<{
  isActive: boolean;
}>`
  width: 8px;
  height: 8px;
  border-radius: ${borderRadius.large};
  background-color: ${({ isActive }) =>
    isActive ? colors.primary01 : colors.primary04};
`;
