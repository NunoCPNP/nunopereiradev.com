import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/logo.png';

const Brand = () => (
  <>
    <StyledImg src={logo} alt="Logo" />
  </>
);

export default Brand;

const StyledImg = styled.img`
  width: 50px;
`;
