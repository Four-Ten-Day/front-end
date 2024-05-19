import { breakpoints } from '@/styles/theme';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';

const LottiePlayer = dynamic(
  () => import('react-lottie-player/dist/LottiePlayerLight'),
  {
    ssr: false,
  }
);

export const Lottie = styled(LottiePlayer)`
  position: absolute;
  inset: 0;
  width: ${breakpoints.xs};
  left: 50%;
  transform: translateX(-50%);
  z-index: -10;
  overflow: hidden;
`;
