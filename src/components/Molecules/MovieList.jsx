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
    {movies.length > 0 ? (
      <h2>Check out these awesome movies!</h2>
    ) : (
      <h2>Sorry, we did not find any movies with that search term. Please try again. </h2>
    )}

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
