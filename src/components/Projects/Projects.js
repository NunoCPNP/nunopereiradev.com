/* eslint no-shadow: 0 */
import React, { Component } from 'react';
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
      <div>
        {data.map(project => (
          <>
            <h4 style={{ color: 'white' }}>{project.title}</h4>
            <img src="" alt="" />
            <h5>Fix Description on Sanity</h5>
            <h6>{project.githubUrl}</h6>
            <h6>{project.projectUrl}</h6>
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.sanity.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
