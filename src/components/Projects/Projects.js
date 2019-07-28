/* eslint no-shadow: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Project from './Project';
import Header from './Header';

import { below } from '../../utilities';

import { getData } from '../../store/Sanity/actions';

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
              key={project.id}
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
  height: 100vh;
  align-content: center;

  ${below.extra`
    height: 700px;
  `}

  ${below.xxs`
    height: auto;
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  margin: 20px;

  ${below.extra`
    grid-column-gap: 10px;
  `}

  ${below.m`
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 20px;
  `}

  ${below.s`
    margin: 10px;
    grid-column-gap: 10px;
  `}

  ${below.xs`
    margin: 5px;
    grid-column-gap: 5px;
  `}

  ${below.xxs`
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px;
    margin: 10px;
  `}
`;
