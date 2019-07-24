import React from 'react';
import styled from 'styled-components';

import Background from './Background';
import CtaImage from './CtaImage';

import CtaText from './CtaText';

import { below } from '../../utilities';

const CalltoAction = () => (
  <div id="Home">
    <Background />
    <Grid>
      <CtaImage />
      <CtaText />
    </Grid>
  </div>
);

export default CalltoAction;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: calc(100vh - 60px);

  ${below.xxl`
    grid-template-rows: 100vh;
  `}

  ${below.xl`
    grid-template-rows: 800px;
  `}
`;
