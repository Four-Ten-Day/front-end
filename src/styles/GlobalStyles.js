import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  /* Main color */
  --color-M_01: #020202;
  --color-M_02: #757575
  --color-M_03: #959595
  --color-M_04: #D2D2D2
  
  /* Secondary color */
  --color-S_01: #FFC43D
  --color-S_02: #F72585
  --color-S_03: #7209B7
  --color-S_04: #1BCCBA
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}
`;

export default GlobalStyles;
