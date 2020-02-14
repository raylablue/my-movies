import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieResult = ({ movie }) => (
  <div className="col-sm-12 col-md-6 col-lg-4">
    <Link to={`/details/${movie.imdbID}`}>
      <div
        className="mb-4 m-movielist__card"
      >
        <div
          className="m-movielist__poster-container"
        >
          <img
            src={movie.Poster}
            alt="Movie Poster"
            className="m-movielist__poster"
          />
        </div>
        <h4 className="m-movielist__title p-2">
          {movie.Title}
        </h4>

        <div
          className="mx-4 my-1"
          href="/fav"
        >
          <FontAwesomeIcon
            className="fa-3x fas fa-heart"
            data-fa-transform="shrink-10 up-5"
            icon={faHeart}
            id="ticket"
          />
        </div>

      </div>
    </Link>
  </div>
);

MovieResult.defaultProps = {
  movie: [],
};

MovieResult.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
};

export default MovieResult;
