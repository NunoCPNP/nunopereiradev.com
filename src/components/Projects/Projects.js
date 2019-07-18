/* eslint no-shadow: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Project from './Project';
import Header from './Header';

import { getData } from '../../store/Sanity/actions';

import { yellow } from '../../utilities';

class Projects extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data } = this.props;
    return (
      <Wrapper id="Projects">
        <Header />
        <Grid>
          {data.map(project => (
            <Project
              id={project.id}
              title={project.title}
              img={project.imageUrl}
              description={project.description}
              githubUrl={project.githubUrl}
              projectUrl={project.projectUrl}
            />
          ))}
        </Grid>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  data: state.sanity.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  align-content: center;

  & h2 {
    color: ${props => props.theme.colors.secondary};
    padding: 110px 0px 50px 50px;
  }

  & span {
    color: ${yellow};
    font-weight: 800;
    font-size: 33px;
    padding: 0 5px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  margin: 20px;
`;
