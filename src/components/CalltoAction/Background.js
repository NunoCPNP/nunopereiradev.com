import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import BYellow from '../../assets/yellow_asset.png';

import { below } from '../../utilities';

const Background = () => {
  const animation = useSpring({
    from: { transform: 'translate3d(800px, 0, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  return (
    <Wrapper style={animation}>
      <img src={BYellow} alt="" />
    </Wrapper>
  );
};

export default Background;

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  right: 0;

  & img {
    width: 52vw;

    ${below.xl`
      width: 58vw;
    `}
  }

  ${below.extra`
    width: 58vw;
  `}  
`;
