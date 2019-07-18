import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import Contacts from './Contacts';

const AnimatedWrapper = () => {
  const [animation, toggleAnimation] = useState(false);

  const firstAnimation = useSpring({
    opacity: animation ? 1 : 0,
    transform: animation ? 'translate3d(0, 0, 0)' : 'translate3d(0, 80px, 0)',
    config: config.wobbly,
  });

  return (
    <animated.div style={firstAnimation}>
      <Waypoint
        bottomOffset="20%"
        onEnter={() => { if (!animation) toggleAnimation(true); }}
      />
      <Contacts />
    </animated.div>
  );
};

export default AnimatedWrapper;
