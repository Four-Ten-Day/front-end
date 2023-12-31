import styled, { css } from 'styled-components';
import Heading from '../heading';
import Button from '../button';
import { ReactComponent as ElipseSvg } from '../../../public/ellipse.svg';

export const Ellipse = styled(ElipseSvg)`
  ${(props) =>
    props.isblack &&
    css`
      circle {
        fill: var(--color-M_01);
      }
    `}
`;

export const Ellipses = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Title = styled(Heading)`
  display: flex;
  justify-content: center;

  text-align: center;
  white-space: nowrap;
  margin-top: 7.2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 6.4rem;
`;

export const ButtonFrame = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 2rem 2.8rem;
  background-color: var(--color-M_06);
  box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.08);
`;

export const NextButton = styled(Button).attrs({
  variations: 'secondary',
  size: 'large',
})`
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;
