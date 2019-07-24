import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import cta from '../../assets/cta.png';

import { below } from '../../utilities';

const CtaImage = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 800,
  });

  return (
    <ImageWrapper style={fade}>
      <img src={cta} alt="" />
    </ImageWrapper>
  );
};

export default CtaImage;

const ImageWrapper = styled(animated.div)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: center;

  & img {
    padding-top: 120px;
    width: 100%;
    height: auto;

    ${below.xxl`
      width: 95%;
      padding-bottom: 50px;
    `}

    ${below.xl`
      width: 90%;
      padding-left: 50px;
    `}
  }
`;
