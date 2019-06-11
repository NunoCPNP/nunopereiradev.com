import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  darkBlue, gray00, yellow, above, below, elevation,
} from '../../utilities';

import { toggleDropdown } from '../../store/Navbar/actions';

import Brand from './Brand';
import BurgerMenu from './Burgermenu';

const NavBar = ({ toggleDropdown }) => (
  <NavBarWrapper>
    <NavBrand>
      <Brand />
    </NavBrand>
    <NavLinks>
      <a to="/">Home</a>
      <a to="/">About</a>
      <a to="/">Projects</a>
      <a to="/">Contacts</a>
    </NavLinks>
    <BurgerWrapper>
      <div onClick={toggleDropdown}>
        <BurgerMenu />
      </div>
    </BurgerWrapper>
  </NavBarWrapper>
);

NavBar.propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dropdownVisibility: state.navbar.dropdownVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggleDropdown }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);

const NavBarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 60px;
  background: ${darkBlue};  
  ${elevation[1]};
  z-index: 2;

  ${below.med`
    grid-template-columns: 1fr 100px;
  `}
`;

const NavBrand = styled.div`
  color: ${gray00};
  margin-left: 30px;
  display:flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin-right: 100px;
  display:flex;
  align-items: center;
  
  & a {
    color: ${gray00};
    margin: 0 10px;
    transition: all 300ms linear 0s;
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
