import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 100%;
  padding-top: 1.6rem;
`;

export const Spacer = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  margin-left: 1rem;
  height: 0.4rem;
  background-color: var(--color-M_05);
  z-index: -1;
`;
