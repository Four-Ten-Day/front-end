import styled from 'styled-components';
import { ButtonGroup } from '../../../ui/ButtonGroup';

export const Image = styled.img`
  width: 100%;
  height: 20rem;
  border-radius: 20px;
  background: url(${(props) => props.url}) no-repeat center center;
  background-size: cover;
  background-color: lightgray;
`;

export const ResultTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  margin-top: 2.4rem;
`;

export const Span = styled.span`
  color: var(--color-M_02);
  font-size: 1.6rem;
`;

export const ButtonRow = styled(ButtonGroup)`
  gap: 0.8rem;

  margin-top: 3.2rem;
`;
