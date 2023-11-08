import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    gap: 0.8rem;

    width: 16.8rem;

    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
  `,
  large: css`
    gap: 3.2rem;
    padding: 3.2rem 3.8rem;
  `,
};

export const ButtonIcon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--color-M_04);
  border-radius: var(--border-radius);
  color: var(--color-M_03);

  ${(props) => sizes[props.size]}

  ${(props) =>
    props.selected &&
    css`
      border: var(--color-M_01);
      background-color: var(--color-M_01);
      color: var(--color-M_05);
    `};
`;
