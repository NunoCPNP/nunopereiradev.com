import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleDropdown } from '../../store/Navbar/actions';

import './Burgermenu.css';

const Burgermenu = ({ toggleDropdown, dropdownVisibility }) => (
  <div
    id="burger-menu"
    className={dropdownVisibility ? 'open' : null}
    onClick={toggleDropdown}
  >
    <div id="burger">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  </div>
);

const mapStateToProps = state => ({
  dropdownVisibility: state.navbar.dropdownVisibility,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggleDropdown }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Burgermenu);
