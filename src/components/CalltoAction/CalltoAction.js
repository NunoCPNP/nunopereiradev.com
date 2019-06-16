import React from 'react';
import styled from 'styled-components';

import Background from './Background';
import ImageText from './ImageText';

const CalltoAction = () => (
  <Wrapper>
    <Background />
    <ImageText />
  </Wrapper>
);

export default CalltoAction;

const Wrapper = styled.div`
  position: relative;
`;
