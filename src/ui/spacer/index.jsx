import styled, { css } from 'styled-components';

export const Spacer = styled.div`
  width: 100%;

  height: ${(props) => props.height};
  background: ${(props) => props.background};
  ${(props) =>
    props.fullPage &&
    css`
      margin-left: -20px;
      margin-right: -20px;
    `}
`;
