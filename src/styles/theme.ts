import { keyframes } from '@emotion/react';

export const breakpoints = {
  xs: '393px',
};

export const colors = {
  primary01: '#020202',
  primary02: '#757575',
  primary03: '#959595',
  primary04: '#D2D2D2',
  primary05: '#F3F3F3',
  primary06: '#FFFFFF',
  secondary01: '#FFC43D',
  secondary02: '#F72585',
  secondary03: '#7209B7',
  secondary04: '#1BCCBA',
};

export const fontSize = {
  h1: '28px',
  h2: '24px',
  h3: '18px',
  h4: '16px',
  t1: '24px',
  t2: '20px',
  b1: '18px',
  b2: '16px',
  b3: '14px',
  b4: '12px',
};

export const borderRadius = {
  small: '15px',
  medium: '20px',
  large: '50px',
};

export const boxShadow = {
  topSm: '0px -1px 15px 0px rgba(0, 0, 0, 0.08)',
};

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
