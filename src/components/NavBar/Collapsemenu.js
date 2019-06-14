import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useSpring, animated } from 'react-spring';

import { darkBlue, gray00, yellow } from '../../utilities';

const Collapsemenu = ({ dropdownVisibility }) => {
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
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contacts</li>
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

export default connect(mapStateToProps)(Collapsemenu);

const CollapseWrapper = styled(animated.div)`
  background: ${darkBlue};
  position: relative;
  padding-top: 65px;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  color: ${gray00};
  padding: 10px 10px 20px 15px;
  
  & li {
    transition: all 300ms linear 0s;
    cursor: pointer;
    
    &:hover {
      color: ${yellow};
    }
  }
`;
