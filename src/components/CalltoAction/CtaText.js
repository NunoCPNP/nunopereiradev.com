import React from 'react';
import styled from 'styled-components';

import {
  yellow, darkBlue, above, below,
} from '../../utilities';

const CtaText = () => (
  <StyledLettering>
    <h4>Hello</h4>
    <h1>
    I'm
      <span> Nuno</span>
    </h1>
    <h1><span>Pereira</span></h1>
    <h3>A Front End Developer</h3>
  </StyledLettering>
);

export default CtaText;

const StyledLettering = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;

  & h1 {
    font-size: 65px;
    font-weight: 800;
    color: ${darkBlue};
  }
  & span {
    font-size: 65px;
    font-weight: 800;
    color: ${yellow};
  }
  & h3 {
    margin-top:30px;
    font-size: 30px;
    font-weight: 600;
    color: ${darkBlue};
  }
  & h4 {
    font-size: 20px;
    color: ${yellow};
  }
`;
