import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

import {
  darkBlue, gray00, yellow, above, below, elevation,
} from '../../utilities';

import Brand from './Brand';
import BurgerMenu from './Burgermenu';

const NavBar = () => {
  const animation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 1600,
    config: config.wobbly,
  });

  return (
    <NavBarWrapper>
      <NavBrand>
        <Brand />
      </NavBrand>
      <NavLinks style={animation}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Contacts">Contacts</a>
      </NavLinks>
      <BurgerWrapper>
        <BurgerMenu />
      </BurgerWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 60px;
  background: ${darkBlue};  
  ${elevation[2]};
  z-index: 1;

  ${below.m`
    grid-template-columns: 1fr 80px;
    ${elevation[0]};
  `}
`;

const NavBrand = styled.div`
  color: ${gray00};
  margin-left: 30px;
  display:flex;
  align-items: center;

  ${below.m`
    margin-left: 10px;
  `}
`;

const NavLinks = styled(animated.ul)`
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

  ${below.m`
    display: none;
  `}
`;

const BurgerWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;

  ${above.m`
    display: none;
  `}
`;
