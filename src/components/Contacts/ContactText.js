import React from 'react';
import styled from 'styled-components';

import { yellow, below } from '../../utilities';

const ContactText = () => (
  <Grid>
    <h3>
      <span>Hi There</span>
    </h3>
    <h3>Before you leave</h3>
    <Spacer />
    <h2>
      I want you to remember that presently, I am open to
      <span> full time on-site </span>
      job offers in
      <span> London or Portugal </span>
    </h2>
    <h2>
      I can be a great addition to your team so drop me a message at
      <span> hello@nunopereiradev.com </span>
    </h2>
    <Spacer />
    <h3>Thank You</h3>
    <h3>
      <span>Nuno</span>
    </h3>
  </Grid>
);

export default ContactText;

const Grid = styled.div`
  grid-column: 2 / 3;
  padding: 50px;
  align-self: center;

  & h2 {
    color: ${props => props.theme.colors.secondary};
  }

  & h3 {
    color: ${props => props.theme.colors.secondary};
  }

  & span {
    color: ${yellow};
  }

  ${below.m`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding: 20px;
  `}
`;

const Spacer = styled.div`
  padding-bottom: 30px;
`;
