import React from 'react';
import styled from 'styled-components';

import {
  darkBlue, gray00, yellow, above, below, elevation,
} from '../../utilities';

import Brand from './Brand';
import BurgerMenu from './Burgermenu';

const NavBar = () => (
  <NavBarWrapper>
    <NavBrand>
      <Brand />
    </NavBrand>
    <NavLinks>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Projects</a>
      <a href="/">Contacts</a>
    </NavLinks>
    <BurgerWrapper>
      <BurgerMenu />
    </BurgerWrapper>
  </NavBarWrapper>
);

export default NavBar;

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 60px;
  background: ${darkBlue};  
  ${elevation[2]};
  z-index: 1  ;

  ${below.med`
    grid-template-columns: 1fr 80px;
    ${elevation[0]};
  `}
`;

const NavBrand = styled.div`
  color: ${gray00};
  margin-left: 30px;
  display:flex;
  align-items: center;

  ${below.med`
    margin-left: 10px;
  `}
`;

const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin-right: 30px;
  display:flex;
  align-items: center;
  
  & a {
    color: ${gray00};
    margin: 0 10px;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${yellow};
    }
  }

  ${below.med`
    display: none;
  `}
`;

const BurgerWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  ${above.med`
    display: none;
  `}
`;
