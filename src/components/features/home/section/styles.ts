import { fadeIn } from '@/styles/theme';
import styled from '@emotion/styled';

type AnimatedMessageProps = {
  delay: string;
};

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const Header = styled.h2`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  text-align: center;
`;

export const AnimatedMessage = styled.span<AnimatedMessageProps>`
  opacity: 0;
  white-space: nowrap;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: ${(props) => props.delay || '0s'};
  font-weight: 400;
`;
