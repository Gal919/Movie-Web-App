import React from 'react';
import '../styles/SearchBar.css'; 

const SearchBar = ({ setSearchValue, searchValue }) => {

  return (
    <div className='search-container'>
      <input
        onChange={(event) => {
          setSearchValue(event.target.value);
          localStorage.setItem('lastSearch', JSON.stringify(event.target.value));
          event.preventDefault();
          }}
        className='search-box'
        type='text'
        placeholder='Search for a Movie...'
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;
