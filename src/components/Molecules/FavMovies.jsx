import React from 'react';
import MovieResult from '../Atoms/MovieResult';

const FavMovies = () => {
  const favMovieList = Object.values(localStorage);

  if (localStorage.length === 0) {
    return (
      <div>
        <h1>Favourite Movies</h1>
        <p>
            Looks like you don&lsquo;t have any favourite movies yet.
            Go spread some love and come back here to see all your favourite movies
            in one place.
        </p>
      </div>
    );
  }
  return (
    <div className="row">
      {favMovieList.map((favMovie) => (
        <MovieResult
          movie={JSON.parse(favMovie)}
          key={JSON.parse(favMovie).imdbID}
        />
      ))}
    </div>
  );
};

export default FavMovies;
