import styled, { css } from 'styled-components';

import Button from '../../../ui/Button';

export const Spacer = styled.div`
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
`;

export const Span = styled.span`
  font-size: 2.8rem;
`;

export const NextButton = styled(Button).attrs({ size: 'medium' })`
  margin: 0 auto;
  margin-top: 4.8rem;
`;
