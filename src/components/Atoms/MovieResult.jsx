import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieResult.scss';
import FavButton from './FavButton';

const MovieResult = ({ movie }) => {
  const addDefaultSrc = (e) => {
    // eslint-disable-next-line global-require
    e.target.src = require('./poster-placeholder.jpg');
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div
        className="mb-4 m-movielist__card"
      >
        <Link to={`/details/${movie.imdbID}`}>
          <div
            className="m-movielist__poster-container"
          >
            <img
              src={movie.Poster}
              alt="Movie Poster"
              className="m-movielist__poster"
              onError={addDefaultSrc}
            />
          </div>
          <h4 className="m-movielist__title p-2">
            {movie.Title}
          </h4>
        </Link>
        <div className="a-movie-result__content pb-3">
          <FavButton
            movie={movie}
          />
        </div>
      </div>
    </div>
  );
};

MovieResult.defaultProps = {
  movie: {},
};

MovieResult.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
};

export default MovieResult;
