import styled, { css } from 'styled-components';

export const Window = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  gap: 1.2rem;
  border-radius: 15px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  transition: all 0.3s;

  ${(props) =>
    props.translatex &&
    css`
      transform: translateX(${props.translatex * 100}%);
    `}
`;
