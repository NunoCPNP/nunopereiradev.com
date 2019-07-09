import React from 'react';
import styled from 'styled-components';

import {
  yellow,
} from '../../utilities';

const CtaText = () => (
  <StyledLettering>
    <h4>Hello</h4>
    <h1>
    I'm
      <span> Nuno</span>
    </h1>
    <h1><span>Pereira</span></h1>
    <h3>A Front-End Developer</h3>
  </StyledLettering>
);

export default CtaText;

const StyledLettering = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  padding-top: 90px;

  & h1 {
    font-size: 75px;
    font-weight: 800;
    color: ${props => props.theme.colors.secondary};
  }
  & span {
    font-size: 75px;
    font-weight: 800;
    color: ${yellow};
  }
  & h3 {
    margin-top:35px;
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.colors.secondary};
  }
  & h4 {
    font-size: 28px;
    color: ${yellow};
  }
`;
