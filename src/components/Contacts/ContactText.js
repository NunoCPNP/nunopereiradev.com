import React from 'react';
import styled from 'styled-components';

import { yellow } from '../../utilities';

const ContactText = () => (
  <Grid>
    <h3>Hi There</h3>
    <h3>Before you leave</h3>
    <Spacer />
    <h2>
      I want you to remember that at present, I am also open to
      <span> full time on-site </span>
      job offers in
      <span> London or Portugal </span>
    </h2>
    <h2>
      If you feel that you want me on your team, drop me a message at
      <span> hello@nunopereiradev.com </span>
    </h2>
    <Spacer />
    <h3>Thank You</h3>
    <h3>Nuno</h3>
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
`;

const Spacer = styled.div`
  padding-bottom: 30px;
`;
