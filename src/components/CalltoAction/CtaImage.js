import React from 'react';
import styled from 'styled-components';

import cta from '../../assets/cta.png';

const CtaImage = () => (
  <ImageWrapper>
    <img src={cta} alt="" />
  </ImageWrapper>
);

export default CtaImage;

const ImageWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;

  & img {
    padding-top: 120px;
    width: 100%;
    height: auto;
  }
`;
