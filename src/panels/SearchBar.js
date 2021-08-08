import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function SearchBar(props) {
  return (
    <div className="search">
      <input type="text" className="searchBar" placeholder="Search Avengers" />
      <FontAwesomeIcon
        icon={faSearch}
        size="lg"
        transform="left-20"
        color={'#d10f00'}
      />
    </div>
  );
}

export default SearchBar;
