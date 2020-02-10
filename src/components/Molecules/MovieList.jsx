import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MovieList.scss';
import { Link } from 'react-router-dom';
import MovieResultConnect from '../Atoms/MovieResult';


const MovieList = ({ movies }) => (
  <div>
    {movies.length > 0 ? (
      <h2>Check out these awesome movies!</h2>
    ) : (
      <h2>Sorry, we did not find any movies with that search term. Please try again. </h2>
    )}
    {movies.map((movie) => (
      <MovieResultConnect
        movie={movie}
        key={movie.imdbID}
      >
        <Link
          to="./details/movie.imdbID"
        />

      </MovieResultConnect>
    ))}
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
