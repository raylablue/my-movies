import React from 'react';
import TemplateDefault from '../Templates/TemplateDefault';
import MovieResult from '../Atoms/MovieResult';

const Fav = () => {
  const favMovieList = Object.values(localStorage)
    .map((value) => {
      try {
        return JSON.parse(value);
      } catch (e) {
        return null;
      }
    })
    .filter((movie) => {
      if (movie && typeof movie === 'object' && movie.imdbID) {
        return true;
      }

      return false;
    });

  if (favMovieList.length === 0) {
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
            movie={favMovie}
            key={favMovie.imdbID}
          />
        ))}
      </div>
    </TemplateDefault>
  );
};

export default Fav;
