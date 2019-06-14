import React from 'react';
import styled from 'styled-components';

import Background from './Background';

const CalltoAction = () => (
  <Wrapper>
    <Background />
  </Wrapper>
);

export default CalltoAction;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;
