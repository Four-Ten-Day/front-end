import styled, { css } from 'styled-components';

export const InterestButton = styled.button`
  border: none;

  &:hover {
    background-color: black;
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: black;
    `}
`;
