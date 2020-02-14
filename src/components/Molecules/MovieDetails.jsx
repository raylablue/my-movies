import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = ({ movie }) => (
  <>
    <h2>{movie.Title}</h2>
    <p>
      {movie.Rated}
      &nbsp;|&nbsp;
      {movie.Runtime}
      &nbsp;|&nbsp;
      IMDB Rating: &nbsp;
      {movie.imdbRating}
      &nbsp;|&nbsp;
      {movie.Released}
    </p>
    <img
      src={movie.Poster}
      alt="movie poster"
    />
    <p>
      {movie.Genre}
      <br />
      {movie.Plot}
    </p>
    <p>
      Director: &nbsp;
      {movie.Director}
    </p>
    <p>
      Writers: &nbsp;
      {movie.Writer}
    </p>
    <p>
      Actors: &nbsp;
      {movie.Actors}
    </p>
  </>
);

MovieDetails.defaultProps = {
  movie: [],
};

MovieDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
};

export default MovieDetails;
