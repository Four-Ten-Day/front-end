import styled, { css } from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap}rem;
    `}
`;

ButtonGroup.defaultProps = {
  gap: '1.6',
};
