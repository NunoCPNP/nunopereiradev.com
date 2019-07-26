import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import StyleSwitch from '../elements/StyleSwitch';
import Collapsemenu from '../components/NavBar/Collapsemenu';
import CalltoAction from '../components/CalltoAction/CalltoAction';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import AnimatedWrapper from '../components/Contacts/AnimatedWrapper';

import { ThemeLight, ThemeDark } from '../themes';

const HomePage = ({ darkmode }) => (
  <ThemeProvider theme={darkmode ? ThemeDark : ThemeLight}>
    <Wrapper>
      <NavBar />
      <Collapsemenu />
      <CalltoAction />
      <About />
      <Projects />
      <AnimatedWrapper />
      <StyleSwitch />
    </Wrapper>
  </ThemeProvider>
);

const mapStateToProps = state => ({
  darkmode: state.darkmode.darkmode,
});

export default connect(mapStateToProps)(HomePage);

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 100vw;
  height: 100%;
  transition: 0.4s ease all;
  z-index: -2;
`;
