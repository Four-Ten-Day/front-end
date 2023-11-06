import styled, { css } from 'styled-components';
import Heading from '../Heading';
import Button from '../Button';
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

  margin-top: 7.2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 64px;
`;

export const NextButton = styled(Button)`
  position: absolute;
  bottom: 5.3rem;
  left: 50%;
  transform: translateX(-50%);

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}
`;
