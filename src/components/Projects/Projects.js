/* eslint no-shadow: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
            <div key={project.id}>
              <h4 style={{ color: 'white' }}>{project.title}</h4>
              <img src={project.imageUrl} alt="" />
              <h5>{project.description}</h5>
              <h6>{project.githubUrl}</h6>
              <h6>{project.projectUrl}</h6>
            </div>
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

`;
