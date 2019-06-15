import React from 'react';
import styled from 'styled-components';

import Background from './Background';
import CtaImage from './CtaImage';

const CalltoAction = () => (
  <Wrapper>
    <Background />
    <CtaImage />
  </Wrapper>
);

export default CalltoAction;

const Wrapper = styled.div`
  position: relative;
`;
