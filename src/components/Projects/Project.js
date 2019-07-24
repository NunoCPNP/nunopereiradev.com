/* eslint react/jsx-no-target-blank: 0 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

import { yellow, darkBlue, below } from '../../utilities';

const Project = (props) => {
  const [first, toggleFirst] = useState(false);

  const firstAnimation = useSpring({
    opacity: first ? 1 : 0,
    transform: first ? 'translate3d(0, 0, 0)' : 'translate3d(0, 200px, 0)',
    config: config.molasses,
  });

  const {
    title, img, description, githubUrl, projectUrl,
  } = props;

  return (
    <Wrapper style={firstAnimation}>
      <Waypoint
        bottomOffset="20%"
        onEnter={() => { if (!first) toggleFirst(true); }}
      />
      <h4>{title}</h4>
      <img src={img} alt="Project Cover" />
      <h5>{description}</h5>
      <BtnWrapper>
        <a href={githubUrl} target="_blank">GitHub</a>
        <a href={projectUrl} target="_blank">Live</a>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled(animated.div)`
  color: ${props => props.theme.colors.secondary};

  & h4 {
    color: ${yellow};
    text-align: center;
    font-size: 25px;
    padding-bottom: 20px;

    ${below.xxl`
      font-size: 22px;
    `}

    ${below.extra`
      font-size: 20px;
    `}
  }

  & img {
    width: 100%;
  }

  & h5 {
    text-align: justify;
    font-size: 20px;
    padding: 10px;

    ${below.xxl`
      font-size: 18px;
    `}

    ${below.extra`
      font-size: 15px;
    `}
  }
`;

const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 10px;

  & a {
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    background: none;
    border: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
    width: 100%;
    transition: all 300ms linear 0s;
    font-family: "Poppins", sans-serif;
    padding: 4px;
  }

  & a:hover {
    color: ${darkBlue};
    background-color: ${yellow};
    border: 1px solid ${yellow};
  }
`;
