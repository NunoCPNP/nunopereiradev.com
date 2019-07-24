import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

import {
  yellow, below,
} from '../../utilities';

const CtaText = () => {
  const animation = useSpring({
    from: { transform: 'translate3d(-600px, 0, 0)' },
    transform: 'translate3d(0, 0, 0)',
    config: config.stiff,
    delay: 1200,
  });

  return (
    <StyledLettering style={animation}>
      <h4>Hello</h4>
      <h1>
      I'm
        <span> Nuno</span>
      </h1>
      <h1><span>Pereira</span></h1>
      <h3>A Front-End Developer</h3>
    </StyledLettering>
  );
};

export default CtaText;

const StyledLettering = styled(animated.div)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: center;
  padding-top: 90px;

  & h1 {
    font-size: 75px;
    font-weight: 800;
    color: ${props => props.theme.colors.secondary};
  }
  & span {
    font-size: 75px;
    font-weight: 800;
    color: ${yellow};
  }
  & h3 {
    margin-top:35px;
    font-size: 32px;
    font-weight: 700;
    color: ${props => props.theme.colors.secondary};
  }
  & h4 {
    font-size: 28px;
    color: ${yellow};
  }

  ${below.xxl`
    padding-top: 50px;
  `}

  ${below.extra`
    padding-left: 20px;

    & h1 {
      font-size: 60px;
    }

    & span {
      font-size: 60px;
    }

    & h3 {
      font-size: 27px;
    }
  `}
`;
