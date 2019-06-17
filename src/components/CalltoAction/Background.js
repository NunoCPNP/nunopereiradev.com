import React from 'react';
import styled from 'styled-components';

import BYellow from '../../assets/yellow_asset.png';

const Background = () => (
  <Wrapper>
    <img src={BYellow} alt="" />
  </Wrapper>
);

export default Background;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
