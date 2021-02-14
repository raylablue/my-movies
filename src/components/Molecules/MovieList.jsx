import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Atoms/MovieResult.scss';
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

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const MovieListConnect = connect(
  mapStateToProps,
)(MovieList);

export default MovieListConnect;
