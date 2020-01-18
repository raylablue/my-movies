import React from 'react';
import NavBar from '../Organisms/NavBar/NavBar';

function Search() {
  return (
    <>
      <NavBar />
      <p>
        This is the main Search page (magnifying glass).
        <br />
        This will be a secret page that takes looks like you&apos;re still in the gallery
        but is really a new page to display search results based on user input.
      </p>
    </>
  );
}

export default Search;
