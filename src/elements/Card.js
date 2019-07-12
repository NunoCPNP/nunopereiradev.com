/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components';

import { elevation, lightBlue } from '../utilities';

export const Card = styled.div`
  background-color: ${lightBlue};
  padding: 25px 20px;
  margin-right: 20px;
  border-radius: 20px;
  /* ${elevation[2]}; */
`;
