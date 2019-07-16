/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components';

import { lightBlue, below } from '../utilities';

export const Card = styled.div`
  background-color: ${lightBlue};
  padding: 25px 20px;
  border-radius: 20px;

  ${below.xxl`
    padding: 25px 10px;
  `}
`;
