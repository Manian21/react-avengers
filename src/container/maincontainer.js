import React from 'react';
import { connect } from 'react-redux';
import {
  addAvenger,
  selectedAvenger,
  closeSelectedAvenger,
  likedAvenger
} from '../action/avengeraction';
import { searchAvenger } from '../action/searchAction';
import AvengersList from '../panels/Avengerslist';
import Navbar from '../panels/Navbar';
import AvengerDetail from '../panels/AvengerDetail';

const mapStateToProps = state => {
  let avengersSearched = state.search.value
    ? state.avengers.avengersList.filter(avenger =>
        avenger.name.toLowerCase().includes(state.search.value.toLowerCase())
      )
    : state.avengers.avengersList;
  
  let avengers = { ...state.avengers, avengersList: avengersSearched };
  return {
    avengers: avengers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    avengerDispatch: {
      addAvenger: avenger => dispatch(addAvenger(avenger)),
      selectedAvenger: avenger => dispatch(selectedAvenger(avenger)),
      closeSelectedAvenger: () => dispatch(closeSelectedAvenger()),
      likedAvenger: avenger => dispatch(likedAvenger(avenger))
    },
    searchDispatch: {
      search: search => dispatch(searchAvenger(search))
    }
  };
};

function Main(props) {
  return (
    <React.Fragment>
      <Navbar dispatches={props.searchDispatch} />
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
