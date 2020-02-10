import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const MovieResult = ({ movie }) => (

  <div className="container-fluid">
    <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
      <div
        className="my-4 mx-3 p-1 m-movielist__card"
        key={movie.imdbID}
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
    </div>
  </div>

);

MovieResult.defaultProps = {
  movie: [],
};

MovieResult.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const MovieResultConnect = connect(
  mapStateToProps,
)(MovieResult);

export default MovieResultConnect;
