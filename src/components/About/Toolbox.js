import React from 'react';
import styled from 'styled-components';

import tbImage from '../../assets/tools.png';

import { yellow } from '../../utilities';

const Toolbox = () => (
  <Grid>
    <Container>
      <img src={tbImage} alt="Toolbox" />
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

export default Toolbox;

const Grid = styled.div`
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: repeat(6, 1fr);

  & img {
    width: 250px;
    justify-self: center;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    padding-bottom: 40px;
  }

  & h2 {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    justify-self: center;
    color: ${yellow};
    padding-bottom: 15px;
  }

  & h3 {
    color: ${props => props.theme.colors.secondary};
    justify-self: center;
    padding-top: 10px;
  }
`;
