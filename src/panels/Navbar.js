import React from 'react';
import SearchBar from './SearchBar';
function Navbar(props) {
  return (
    <div className="navbar">
      <div className="appTitle">Avengers</div>
      <SearchBar search={props.dispatches.search} />
    </div>
  );
}

export default Navbar;
