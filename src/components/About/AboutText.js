/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import { yellow, below } from '../../utilities';

import { Card } from '../../elements';

const AboutText = () => {
  const [first, toggleFirst] = useState(false);

  const firstAnimation = useSpring({
    opacity: first ? 1 : 0,
    transform: first ? 'translate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)',
    config: config.gentle,
  });

  const secondAnimation = useSpring({
    opacity: first ? 1 : 0,
    transform: first ? 'translate3d(0, 0, 0)' : 'translate3d(-50%, 0, 0)',
    config: config.slow,
  });

  const thirdAnimation = useSpring({
    opacity: first ? 1 : 0,
    transform: first ? 'translate3d(0, 0, 0)' : 'translate3d(0, 200px, 0)',
    config: config.molasses,
  });

  return (
    <Wrapper>
      <animated.div style={firstAnimation}>
        <Waypoint
          bottomOffset="50%"
          onEnter={() => { if (!first) toggleFirst(true); }}
        />
        <h2>
        I don't Like to define myself by the
          <span> work I have done </span>
        . I define myself by the
          <span> work I want to do </span>
        . Skills can be taught, personality is inherent. I prefer to
          <span> keep learning </span>
        , to continue
          <span> challenge </span>
        myself, and to do interesting things that are meaningful.
        </h2>
      </animated.div>
      <SubHeader>
        <animated.h2 style={secondAnimation}>
          I love to develop
          <span> digital products </span>
          that are :
        </animated.h2>
      </SubHeader>
      <SubGrid style={thirdAnimation}>
        <AboutCard>
          <h2>Fast</h2>
          <h4>Fast load times and lag free interaction are my highest priority</h4>
        </AboutCard>
        <AboutCard>
          <h2>Responsive</h2>
          <h4>My layouts will work on any device, big or small</h4>
        </AboutCard>
        <AboutCard>
          <h2>Intuitive</h2>
          <h4>Strong preference for easy to use intuitive UX / UI</h4>
        </AboutCard>
        <AboutCard>
          <h2>Dynamic</h2>
          <h4>Websites don't have to be static. I love making things come to life</h4>
        </AboutCard>
      </SubGrid>
    </Wrapper>
  );
};

export default AboutText;

const Wrapper = styled.div`
  grid-column: 1 / 2;
  align-self: center;
  padding: 50px;

  h2 {
    color: ${props => props.theme.colors.secondary};
    line-height: 3.5rem;
  }

  & span {
    color: ${yellow};
    font-weight: 800;
    font-size: 33px;
    padding: 0 5px;
  }

  ${below.xxl`
    & h2 {
      line-height: 3rem;
    }
  `}
`;

const SubHeader = styled.div`
  padding-top: 50px;
`;

const SubGrid = styled(animated.div)`
  padding-top: 70px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;

  & h2 {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }

  ${below.xxl`
    padding-top: 40px;
    grid-template-rows: 1fr;
  `}
`;

const AboutCard = styled(Card)`
  & h2 {
    text-align: center;
    color: ${yellow};
    font-size: 30px;
    font-weight: 800;
  }

  & h4 {
    text-align: center;
    padding-top: 10px;
    color: ${props => props.theme.colors.secondary};
  }
`;
