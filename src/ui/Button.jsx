import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 15.4rem;
    height: 5.6rem;
  `,
  medium: css`
    width: 24rem;
    height: 6.4rem;
  `,
  large: css`
    width: 35.3rem;
    height: 6.4rem;
  `,
};

const variations = {
  primary: css`
    background-color: var(--color-M_06);
    border: 1px solid var(--color-M_01);
    color: var(--color-M_03);
  `,

  secondary: css`
    background-color: var(--color-M_04);
    color: var(--color-M_01);
    border: 1px solid var(--color-M_04);
  `,

  ternary: css`
    background-color: var(--color-M_01);
    color: var(--color-M_06);
    border: 1px solid var(--color-M_01);
  `,
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1.9rem 2.4rem;
  border-radius: var(--border-radius);
  font-size: 2.4rem;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variations]}
  ${(props) =>
    props.rounded &&
    css`
      border-radius: var(--border-radius-rounded);
    `};

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--color-M_01);
      color: var(--color-M_05);
    `};
`;

export default Button;
