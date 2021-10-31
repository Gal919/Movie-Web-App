import "../styles/SearchBar.css"; 


const SearchBar = ({ setSearchValue }) => {

  return (
    <div className="searchContainer">
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className="searchBox"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar
