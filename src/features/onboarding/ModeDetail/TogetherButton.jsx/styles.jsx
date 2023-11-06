import styled, { css } from 'styled-components';
import { ReactComponent as TogetherSvg } from '../../../../../public/together.svg';

export const TogetherButton = styled(TogetherSvg)`
  border-radius: var(--border-radius);

  ${(props) =>
    !props.selected &&
    css`
      &:hover {
        background-color: var(--color-M_05);
        color: var(--color-M_01);
        stroke-width: 0;
      }
    `}

  &:active {
    background-color: var(--color-M_01);
    color: var(--color-M_05);
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--color-M_01);
      color: var(--color-M_05);
    `}
`;
