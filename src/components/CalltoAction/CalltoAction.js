import React from 'react';
import styled from 'styled-components';

import Background from './Background';
import CtaImage from './CtaImage';

import { above, below } from '../../utilities';
import CtaText from './CtaText';

const CalltoAction = () => (
  <Wrapper>
    <Background />
    <Grid>
      <CtaImage />
      <CtaText />
    </Grid>
  </Wrapper>
);

export default CalltoAction;

const Wrapper = styled.div`
  position: relative;
`;

const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
`;
