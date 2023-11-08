import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  /* Main color */
  --color-M_01: #020202;
  --color-M_02: #757575;
  --color-M_03: #959595;
  --color-M_04: #D2D2D2;
  --color-M_05: #f3f3f3;
  --color-M_06: #FFFFFF;
  
  /* Secondary color */
  --color-S_01: #FFC43D;
  --color-S_02: #F72585;
  --color-S_03: #7209B7;
  --color-S_04: #1BCCBA;

  --border-radius: 15px;
  --border-radius-rounded: 50px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

*:disabled {
  cursor: not-allowed;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Jua', sans-serif;

  min-height: 100vh;
  font-size: 1.6rem;
}

h1,
h2,
h3,
h4{
  font-weight: 400;
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
  background: inherit ; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  overflow:visible; 
  

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
