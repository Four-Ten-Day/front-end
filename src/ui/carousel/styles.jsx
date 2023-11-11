import styled from 'styled-components';

export const Title = styled.div``;

export const Content = styled.div`
  display: flex;
  gap: 1.2rem;
  padding: 1rem;
  margin-left: -1rem;

  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
