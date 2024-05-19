import { Global, css } from '@emotion/react';

const styles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    color: inherit;
    background: inherit;
    border: none;
  }

  *:disabled {
    cursor: not-allowed;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
