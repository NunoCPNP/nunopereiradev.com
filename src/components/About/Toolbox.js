import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import tbImage from '../../assets/tools.png';

import { yellow, below } from '../../utilities';

const Toolbox = () => {
  const [first, toggleFirst] = useState(false);

  const firstAnimation = useSpring({
    opacity: first ? 1 : 0,
    transform: first ? 'translate3d(0, 0, 0)' : 'translate3d(0, -200px, 0)',
    config: config.molasses,
  });

  const secondAnimation = useSpring({
    opacity: first ? 1 : 0,
    transform: first ? 'translate3d(0, 0, 0)' : 'translate3d(0, 200px, 0)',
    config: config.slow,
  });

  return (
    <Grid>
      <Waypoint
        bottomOffset="25%"
        onEnter={() => { if (!first) toggleFirst(true); }}
      />
      <animated.img src={tbImage} alt="Toolbox" style={firstAnimation} />
      <Container style={secondAnimation}>
        <h2>My current stack of tools</h2>
        <h3>HTML5</h3>
        <h3>CSS3</h3>
        <h3>JavaScript</h3>
        <h3>ReactJS</h3>
        <h3>Redux</h3>
        <h3>Gatsby</h3>
        <h3>GraphQL</h3>
        <h3>Firebase</h3>
      </Container>
    </Grid>
  );
};

export default Toolbox;

const Grid = styled.div`
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;

  & img {
    display: grid;
    width: 250px;
    padding-bottom: 40px;
    margin: auto;

    ${below.extra`
      width: 220px;
    `}

    ${below.m`
      display: none;
    `}
  }

  ${below.m`
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  `}
`;

const Container = styled(animated.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: repeat(6, 1fr);

  & h2 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-self: center;
    color: ${yellow};
    padding-bottom: 15px;

    ${below.extra`
      font-size: 22px;
    `}
  }

  & h3 {
    color: ${props => props.theme.colors.secondary};
    justify-self: center;
    padding-top: 10px;

    ${below.extra`
      font-size: 18px;
    `}
  }

  ${below.m`
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 1fr 1fr 1fr;
    padding: 50px 0px;

    & h2 {
      grid-column: 1 / 6;
      grid-row 1 / 2;
    }
  `}
`;
