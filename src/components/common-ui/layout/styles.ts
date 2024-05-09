import styled from '@emotion/styled';

export const Layout = styled.div`
  min-height: 100vh;
  @media (min-width: 393px) {
    display: flex;
    justify-content: center;
  }
`;

export const Main = styled.main`
  width: 100%;
  @media (min-width: 393px) {
    max-width: 393px;
  }
`;
