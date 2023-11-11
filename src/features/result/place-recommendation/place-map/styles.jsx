import styled, { css } from 'styled-components';

export const MapContainer = styled.div`
  height: 23.2rem;
  margin-top: 2.4rem;
  margin-left: -2rem;
  margin-right: -2rem;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
`;
