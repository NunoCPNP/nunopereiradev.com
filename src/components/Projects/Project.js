import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { yellow } from '../../utilities';

class Project extends PureComponent {
  render() {
    const {
      key, title, img, description, githubUrl, projectUrl,
    } = this.props;

    return (
      <Wrapper key={key}>
        <h4>{title}</h4>
        <img src={img} alt="" />
        <h5>{description}</h5>
        <h6>{githubUrl}</h6>
        <h6>{projectUrl}</h6>
      </Wrapper>
    );
  }
}

export default Project;

const Wrapper = styled.div`
  color: ${props => props.theme.colors.secondary};

  & h4 {
    color: ${yellow};
    text-align: center;
    font-size: 25px;
  }

  & img {
    width: 100%;
  }
`;
