import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import BYellow from '../../assets/yellow_asset.png';

const Background = () => {
  const animation = useSpring({
    from: { transform: 'translate3d(800px, 0, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  return (
    <Wrapper style={animation}>
      <Grid>
        <img src={BYellow} alt="" />
      </Grid>
    </Wrapper>
  );
};

export default Background;

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  right: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 100%;

  & img {
    grid-column: 2 / 3;
    width: 100%;
  }
`;
