import React from 'react';
import TemplateDefault from '../Templates/TemplateDefault';
import MovieResult from '../Atoms/MovieResult';

const Fav = () => {
  const allStorage = Object.values(localStorage);
  // filter array that comes back from const favMovieList and remove anything undefined
  const favMovieList = allStorage.filter((favMovieValue) => {
    if (favMovieValue && typeof JSON.parse(favMovieValue) === 'object') {
      return true;
    }

    return false;
  });

  if (localStorage.length === 0) {
    return (
      <TemplateDefault>
        <h1>Favourite Movies</h1>
        <p>
          Looks like you don&lsquo;t have any favourite movies yet.
          Go spread some love and come back here to see all your favourite movies
          in one place.
        </p>
      </TemplateDefault>
    );
  }

  return (
    <TemplateDefault>
      <div className="row">
        {favMovieList.map((favMovie) => (
          <MovieResult
            movie={JSON.parse(favMovie)}
            key={JSON.parse(favMovie).imdbID}
          />
        ))}
      </div>
    </TemplateDefault>
  );
};

export default Fav;
