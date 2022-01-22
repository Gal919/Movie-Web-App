import '../styles/SearchBar.css'; 

const SearchBar = ({ setSearchValue, searchValue }) => {

  return (
    <div className='search-container'>
      <input
        onChange={(event) => {
          setSearchValue(event.target.value);
          event.preventDefault();
          }}
        className='search-box'
        type='text'
        placeholder='Search...'
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar
