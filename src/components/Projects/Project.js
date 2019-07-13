import React, { PureComponent } from 'react';
import styled from 'styled-components';

import { yellow, darkBlue } from '../../utilities';

class Project extends PureComponent {
  render() {
    const {
      id, title, img, description, githubUrl, projectUrl,
    } = this.props;

    return (
      <Wrapper key={id}>
        <h4>{title}</h4>
        <img src={img} alt="" />
        <h5>{description}</h5>
        <BtnWrapper>
          <a href={githubUrl}>GitHub</a>
          <a href={projectUrl}>Live</a>
        </BtnWrapper>
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
    padding-bottom: 20px;
  }

  & img {
    width: 100%;
  }

  & h5 {
    text-align: justify;
    font-size: 20px;
    padding: 10px;
  }
`;

const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  padding: 10px;

  & a {
    text-align: center;
    border-radius: 20px;
    text-decoration: none;
    background: none;
    border: 1px solid ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
    width: 100%;
    transition: all 300ms linear 0s;
    font-family: "Poppins", sans-serif;
    padding: 4px;
  }

  & a:hover {
    color: ${darkBlue};
    background-color: ${yellow};
    border: 1px solid ${yellow};
  }
`;
