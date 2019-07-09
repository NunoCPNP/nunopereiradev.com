import React from 'react';
import styled from 'styled-components';

import Background from './Background';
import CtaImage from './CtaImage';

import CtaText from './CtaText';

const CalltoAction = () => (
  <div id="Home">
    <Wrapper>
      <Background />
      <Grid>
        <CtaImage />
        <CtaText />
      </Grid>
    </Wrapper>
  </div>
);

export default CalltoAction;

const Wrapper = styled.div`
  position: relative;
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: calc(100vh - 60px);
`;
