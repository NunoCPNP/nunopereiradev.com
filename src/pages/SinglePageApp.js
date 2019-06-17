import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import StyleSwitch from '../elements/StyleSwitch';
import Collapsemenu from '../components/NavBar/Collapsemenu';
import CalltoAction from '../components/CalltoAction/CalltoAction';

import { ThemeLight, ThemeDark } from '../themes';


const SinglePageApp = ({ darkmode }) => (
  <ThemeProvider theme={darkmode ? ThemeDark : ThemeLight}>
    <Wrapper>
      <NavBar />
      <Collapsemenu />
      <CalltoAction />
      <StyleSwitch />
    </Wrapper>
  </ThemeProvider>
);

const mapStateToProps = state => ({
  darkmode: state.darkmode.darkmode,
});

export default connect(mapStateToProps)(SinglePageApp);

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 100vw;
  height: 100vh;
  transition: 0.3s ease all;
`;
