import React from 'react';
import { connect } from 'react-redux';
import { addAvenger } from '../action/avengeraction';
import AvengersList from '../panels/Avengerslist';
import Navbar from '../panels/Navbar';

const mapStateToProps = state => {
  return {
    avengers: state.avengers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    avengerDispatch: {
      addAvenger: avenger => dispatch(addAvenger(avenger))
    }
  };
};

function Main(props) {
  return (
    <React.Fragment>
      <Navbar />
      <AvengersList state={props.avengers} dispatches={props.avengerDispatch} />
    </React.Fragment>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
