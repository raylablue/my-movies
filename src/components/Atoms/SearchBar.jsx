import React from 'react';
import { useHistory } from 'react-router';

function SearchBar() {
  const history = useHistory();

  function handleClick() {
    history.push('/search');
  }

  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="button"
          to="/search"
          onClick={handleClick}
        >
          Search
        </button>
      </form>

    </div>
  );
}

export default SearchBar;
