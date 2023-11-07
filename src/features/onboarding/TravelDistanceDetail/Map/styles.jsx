import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
  height: 23.2rem;
  margin-top: -44px;
  margin-left: -2rem;
  margin-right: -2rem;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
`;
