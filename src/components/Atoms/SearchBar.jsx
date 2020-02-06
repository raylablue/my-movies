import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') {
      history.push(`/search/${searchInput}`);
      // window.location.reload();
    }
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {

  });

  return (
    <div>
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          minLength="3"
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>

    </div>
  );
}

export default SearchBar;
