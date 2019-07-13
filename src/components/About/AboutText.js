/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

import { yellow } from '../../utilities';

import { Card } from '../../elements';

const AboutText = () => (
  <Wrapper>
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
    <SubGrid>
      <h2>
      I love to develop
        <span> digital products </span>
      that are :
      </h2>
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

export default AboutText;

const Wrapper = styled.div`
  position: relative;
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
`;

const SubGrid = styled.div`
  padding-top: 70px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 100px 2fr;

  & h2 {
    grid-column: 1 / 5;
    grid-row: 1 / 2;
  }
`;

const AboutCard = styled(Card)`
  & h2 {
    text-align: center;
    color: ${yellow};
    font-size: 30px;
    font-weight: 800;
  }

  & h4 {
    text-align: justify;
    padding-top: 10px;
    color: ${props => props.theme.colors.secondary};
  }
`;
