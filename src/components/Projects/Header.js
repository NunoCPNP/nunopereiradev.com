import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const Header = () => {
  const [animation, toggleAnimation] = useState(false);

  const firstAnimation = useSpring({
    opacity: animation ? 1 : 0,
    transform: animation ? 'translate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)',
    config: config.wobbly,
  });

  return (
    <>

      <animated.h2 style={firstAnimation}>
        <Waypoint
          bottomOffset="20%"
          onEnter={() => { if (!animation) toggleAnimation(true); }}
        />
        Some of the latest
        <span> Projects </span>
        I have been working on
      </animated.h2>
    </>
  );
};

export default Header;
