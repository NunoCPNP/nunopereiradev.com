/* eslint no-shadow: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Project from './Project';

import { getData } from '../../store/Sanity/actions';

class Projects extends Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data } = this.props;
    return (
      <div id="Projects">
        <h2>Projects</h2>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.sanity.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  margin: 20px;
`;
