import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar/NavBar';
import StyleSwitch from '../elements/StyleSwitch';

import { gray00, gray75 } from '../utilities';


const themeLight = {
  colors: {
    primary: `${gray00}`,
  },
};

const themeDark = {
  colors: {
    primary: `${gray75}`,
  },
};

const Home = ({ darkmode }) => (
  <ThemeProvider theme={darkmode ? themeDark : themeLight}>
    <Wrapper>
      <NavBar />
      <StyleSwitch />
    </Wrapper>
  </ThemeProvider>
);

const mapStateToProps = state => ({
  darkmode: state.darkmode.darkmode,
});

export default connect(mapStateToProps)(Home);

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  width: 100vw;
  height: 100vh;
  transition: 0.3s ease all;
`;
