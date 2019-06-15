import React from 'react';
import styled from 'styled-components';

import cta from '../../assets/cta.png';

import { above, below } from '../../utilities';

const CtaImage = () => (
  <ImageWrapper>
    <img src={cta} alt="" />
  </ImageWrapper>
);

export default CtaImage;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-top: 120px;
  padding-right: 60px;

  & img {
    
  }
`;
