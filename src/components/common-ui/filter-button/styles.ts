import { borderRadius, colors, fontSize } from '@/styles/theme';
import styled from '@emotion/styled';

export const sizes = {
  S: `
      gap: 8px;
      height: 72px;
    `,
  L: `
      gap: 32px;
      height: 192px;
    `,
};

export const FilterButton = styled.button<{
  size: keyof typeof sizes;
  active: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 168px;
  font-size: ${fontSize.h3};
  border-radius: ${borderRadius.medium};
  border: 2px solid;
  ${({ size }) => sizes[size]}
  border-color: ${({ active }) =>
    active ? colors.primary01 : colors.primary04};
  color: ${({ active }) => (active ? colors.primary06 : colors.primary04)};
  background-color: ${({ active }) =>
    active ? colors.primary01 : 'transparent'};
`;
