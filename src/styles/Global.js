import { createGlobalStyle } from 'styled-components';

import { custom } from '../utilities';

const GlobalStyles = createGlobalStyle`

  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

  html {
    box-sizing: border-box;
  }

  *, *: before, *: after {
    box-sizing: inherit;
  }

  body {
    ${custom};
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
