import React from 'react';
import styled from 'styled-components';

// Add Classname = "open"

const Burgermenu = () => (
  <Wrapper>
    <div id="burger">
      <span>&nbsp;</span>
      <span>&nbsp;</span>
      <span>&nbsp;</span>
    </div>
  </Wrapper>
);

export default Burgermenu;

const Wrapper = styled.div`
#burger {
  cursor: pointer;
  display: block;
  padding-top: 7px;
}

#burger span {
  background: #eee;
  display: block;
  width: 40px;
  height: 5px;
  margin-bottom: 7px;
  position: relative;
  transition: all ease-in-out 0.2s;
}

#burger-menu.open span:nth-child(2) {
  width: 0;
  opacity: 0;
}

#burger-menu.open span:nth-child(3) {
  transform: rotate(45deg);
  top: -24px;
}

#burger-menu.open span:nth-child(1) {
  transform: rotate(-45deg);
  top: 24px;
}
`;
