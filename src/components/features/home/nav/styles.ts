import Button from '@/components/common-ui/button';
import { fadeIn } from '@/styles/theme';
import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const AnimatedButton = styled(Button)`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 3s;
`;
