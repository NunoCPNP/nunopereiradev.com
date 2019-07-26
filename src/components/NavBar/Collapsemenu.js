import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useSpring, animated } from 'react-spring';

import { toggleDropdown } from '../../store/Navbar/actions';

import { darkBlue, gray00, yellow } from '../../utilities';

const Collapsemenu = ({ toggleDropdown, dropdownVisibility }) => {
  const { open } = useSpring({ open: dropdownVisibility ? 0 : 1 });

  if (dropdownVisibility === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="#Home" onClick={toggleDropdown}>Home</a></li>
          <li><a href="#About" onClick={toggleDropdown}>About</a></li>
          <li><a href="#Projects" onClick={toggleDropdown}>Projects</a></li>
          <li><a href="#Contacts" onClick={toggleDropdown}>Contacts</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  dropdownVisibility: state.navbar.dropdownVisibility,
});

Collapsemenu.propTypes = {
  dropdownVisibility: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({ toggleDropdown }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Collapsemenu);

const CollapseWrapper = styled(animated.div)`
  background: ${darkBlue};
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 10px 10px 20px 15px;
  
  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    text-decoration: none;
    color: ${gray00};
    cursor: pointer;

    &:hover {
      color: ${yellow};
    }
  }
`;
