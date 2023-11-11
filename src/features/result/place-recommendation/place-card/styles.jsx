import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 15px;
  background: var(--color-M_06);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  font-family: 'Nanum Gothic', sans-serif;
  width: 15rem;
  flex-shrink: 0;

  padding-bottom: 1.8rem;
  padding-left: 1.2rem;
  margin-top: 2rem;
`;

export const Img = styled.img`
  width: 100%;
  height: 8rem;
  margin-left: -1.2rem;
`;

export const Title = styled.h2`
  color: var(--color-M_01);
  font-size: 1.6rem;
  font-weight: 700;

  margin-top: 1.6rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Location = styled.div`
  color: var(--color-M_02);
  font-size: 1.2rem;
  font-weight: 400;

  margin-top: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Distance = styled.div`
  color: var(--color-M_01);

  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 3.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
