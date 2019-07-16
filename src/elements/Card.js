/* eslint import/prefer-default-export: 0 */
import styled from 'styled-components';

import { lightBlue, below } from '../utilities';

export const Card = styled.div`
  /* background-color: ${lightBlue}; */
  padding: 25px 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.primary};
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23766d85' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");

  ${below.xxl`
    padding: 25px 10px;
  `}
`;
