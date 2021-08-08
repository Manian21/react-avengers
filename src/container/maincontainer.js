import React from 'react';
import { connect } from 'react-redux';
import {
  addAvenger,
  selectedAvenger,
  closeSelectedAvenger,
  likedAvenger
} from '../action/avengeraction';
import AvengersList from '../panels/Avengerslist';
import Navbar from '../panels/Navbar';
import AvengerDetail from '../panels/AvengerDetail';

const mapStateToProps = state => {
  return {
    avengers: state.avengers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    avengerDispatch: {
      addAvenger: avenger => dispatch(addAvenger(avenger)),
      selectedAvenger: avenger => dispatch(selectedAvenger(avenger)),
      closeSelectedAvenger: () => dispatch(closeSelectedAvenger()),
      likedAvenger: avenger => dispatch(likedAvenger(avenger))
    }
  };
};

function Main(props) {
  return (
    <React.Fragment>
      <Navbar />
      <div className="mainContainer">
        <AvengersList
          state={props.avengers}
          dispatches={props.avengerDispatch}
        />
      </div>
    </React.Fragment>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
