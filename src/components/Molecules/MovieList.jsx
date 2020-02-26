import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MovieList.scss';
import MovieResult from '../Atoms/MovieResult';

function printMovies(movies) {
  return movies.map((movie) => (
    <MovieResult
      movie={movie}
      key={movie.imdbID}
    />
  ));
}

const MovieList = ({ movies }) => (
  <div>
    <div className="row">
      {printMovies(movies)}
    </div>
  </div>
);

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const MovieListConnect = connect(
  mapStateToProps,
)(MovieList);

export default MovieListConnect;
