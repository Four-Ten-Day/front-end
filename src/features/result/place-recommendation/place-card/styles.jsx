import styled from 'styled-components';
import { ReactComponent as ChevronRightSvg } from '../../../../../public/chevron-right.svg';

export const Card = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.14);
  backdrop-filter: blur(10px);
  font-family: 'Nanum Gothic', sans-serif;
  width: 100%;
  flex-shrink: 0;
  padding-bottom: 1.8rem;
  padding-left: 1.2rem;

  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 8rem;
  margin-left: -1.2rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: end;
  gap: 0.8rem;
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

export const GroupName = styled.span`
  color: var(--color-M_02);
  font-size: 1.2rem;
  font-weight: 400;
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

export const Chevron = styled(ChevronRightSvg)`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
`;
