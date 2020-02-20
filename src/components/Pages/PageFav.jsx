import React from 'react';
import TemplateDefault from '../Templates/TemplateDefault';
import FavMovies from '../Molecules/FavMovies';

function Fav() {
  return (
    <TemplateDefault>
      <FavMovies />
      <p>
        This is the main Favourites page (heart).
        <br />
        Fill in later with favourite movies list.
      </p>

    </TemplateDefault>
  );
}

export default Fav;
