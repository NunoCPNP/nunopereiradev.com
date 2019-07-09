import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getData } from '../../store/Sanity/actions';

const About = ({ getData }) => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      ...
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.sanity.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About);
