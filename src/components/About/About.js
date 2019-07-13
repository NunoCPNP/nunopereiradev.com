import React from 'react';
import styled from 'styled-components';

import AboutText from './AboutText';
import Toolbox from './Toolbox';

const About = () => (
  <div id="About">
    <Grid>
      <AboutText />
      <Toolbox />
    </Grid>
  </div>
);

export default About;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: calc(100vh - 60px);
`;
