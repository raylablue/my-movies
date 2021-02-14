import React, { useState } from 'react';
import { useHistory } from 'react-router';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') {
      history.push(`/search/${searchInput}`);
    }
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <form
        className="form-inline"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="movies"
          aria-label="Search"
          minLength="3"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>

    </div>
  );
}

export default SearchBar;
