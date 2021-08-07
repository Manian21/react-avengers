import React from 'react';
import { connect } from 'react-redux';
import { addAvenger } from '../action/avengeraction';
import AvengersList from '../panels/Avengerslist';

const mapStateToProps = state => {
  return {
    avengers: state.avengers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAvenger: avenger => dispatch(addAvenger(avenger))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvengersList);
