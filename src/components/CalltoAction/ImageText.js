import React from 'react';
import styled from 'styled-components';

import cta from '../../assets/cta.png';

import { above, below } from '../../utilities';

const ImageText = () => (
  <ImageWrapper>
    <img src={cta} alt="" />
  </ImageWrapper>
);

export default ImageText;

const ImageWrapper = styled.div`
  position: relative;
  display: grid;

  & img {
    justify-self: end;
    align-self: center;
    padding-top: 110px;
    padding-right: 50px;
    width:100%
  }
`;
