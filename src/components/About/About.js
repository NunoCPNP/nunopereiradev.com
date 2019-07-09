import React from 'react';
import styled from 'styled-components';

import AboutText from './AboutText';

const About = () => (
  <div id="About">
    <Grid>
      <AboutText />
    </Grid>
  </div>
);

export default About;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: calc(100vh - 60px);
`;
