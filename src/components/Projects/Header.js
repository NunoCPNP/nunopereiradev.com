import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import { yellow, below } from '../../utilities';

const Header = () => {
  const [animation, toggleAnimation] = useState(false);

  const firstAnimation = useSpring({
    opacity: animation ? 1 : 0,
    transform: animation ? 'translate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)',
    config: config.wobbly,
  });

  return (
    <>

      <Title style={firstAnimation}>
        <Waypoint
          bottomOffset="20%"
          onEnter={() => { if (!animation) toggleAnimation(true); }}
        />
        Some of the latest
        <span> Projects </span>
        I have been working on
      </Title>
    </>
  );
};

export default Header;

const Title = styled(animated.h2)`
  color: ${props => props.theme.colors.secondary};
  padding: 110px 0px 40px 50px;

  ${below.xxl`
    padding: 90px 0px 20px 50px; 
  `}

  ${below.extra`
    padding: 90px 0px 20px 20px; 
  `}

  ${below.m`
    padding: 20px 0px 30px 20px;
  `}

  & span {
    color: ${yellow};
    font-weight: 800;
    font-size: 33px;
    padding: 0 5px;
  }
`;
