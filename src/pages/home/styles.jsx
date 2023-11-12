import styled, { css, keyframes } from 'styled-components';
import Button from '../../ui/button';

// Use keyframes helper
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  ${(props) =>
    props.margintop &&
    css`
      margin-top: ${props.margintop};
    `}
`;

export const Span = styled.span`
  font-size: 2.8rem;
  white-space: nowrap;
  line-height: 1;
`;

export const NextButton = styled(Button).attrs({
  size: 'medium',
  variations: 'ternary',
})`
  margin: 0 auto;
  margin-top: 4.8rem;
  font-size: 2.4rem;
`;
export const AnimatedSpan = styled(Span)`
  animation: ${fadeIn} 1s ease-out forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: 1s;
  }
  &:nth-child(2) {
    animation-delay: 2s;
  }
`;

export const AnimatedButton = styled(NextButton)`
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 3s;
  opacity: 0;
`;
