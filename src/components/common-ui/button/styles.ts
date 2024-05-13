import { borderRadius, colors, fontSize } from '@/styles/theme';
import styled from '@emotion/styled';
import { Url } from '.';

export const sizes = {
  S: `width: 154px; height: 56px; border-radius: ${borderRadius.small};`,
  M: `width: 240px; height: 64px; border-radius: ${borderRadius.medium};`,
  L: `width: 352px; height: 64px; border-radius: ${borderRadius.medium};`,
};

export const variants = {
  contained: `
      background-color: ${colors.primary01};
      color: ${colors.primary06};
    `,
  outlined: `
      border: 2px solid ${colors.primary01};
      color: ${colors.primary01};
      background-color: transparent;
    `,
};

export const Button = styled.button<{
  size: keyof typeof sizes;
  variant: keyof typeof variants;
  disabled?: boolean;
  href?: Url;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.h2};

  ${({ size }) => sizes[size]}
  ${({ variant }) => variants[variant]} 
  background-color: ${({ disabled }) =>
    disabled ? `${colors.primary04}` : ''};
  color: ${({ disabled }) => (disabled ? `${colors.primary06}` : '')};
`;
