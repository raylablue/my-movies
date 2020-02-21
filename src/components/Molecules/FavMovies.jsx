import React from 'react';
import MovieResult from '../Atoms/MovieResult';

const FavMovies = () => {
  const favMovieList = Object.values(localStorage);

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
