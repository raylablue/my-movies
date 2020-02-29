import React from 'react';
import './MovieDetails.scss';
import PropTypes from 'prop-types';
import FavButton from '../Atoms/FavButton';

const MovieDetails = ({ movie }) => (
  <>
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 text-center">
        <h2 className="m-movie-details__title">
          {movie.Title}
        </h2>
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
          className="pb-4"
        />
        <p>
          {movie.Genre}
        </p>
      </div>
      <div className="col col-lg-6 pb-3 p-4 m-movie-details__filmstrip">
        <FavButton />
        <p className="pt-4">
          {movie.Plot}
          <br />
          <br />
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
      </div>
    </div>
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
