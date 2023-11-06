import styled, { css } from 'styled-components';

import Button from '../../../ui/Button';

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
`;

export const NextButton = styled(Button).attrs({
  size: 'medium',
  variations: 'ternary',
})`
  margin: 0 auto;
  margin-top: 4.8rem;
  font-size: 2.4rem;
`;
