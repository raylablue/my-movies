import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MovieList.scss';
import MovieResultConnect from '../Atoms/MovieResult';


const MovieList = ({ movies }) =>
// const [movieID, setMovieID] = useState();
// const history = useHistory();
//
// const handleClick = () => {
//   history.push(`/details/${movieID}`);
// };
//
// const handleMovieID = (e) => {
//   setMovieID(e.target.value);
// };

  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <div>
      {movies.length > 0 ? (
        <h2>Check out these awesome movies!</h2>
      ) : (
        <h2>Sorry, we did not find any movies with that search term. Please try again. </h2>
      )}
      <MovieResultConnect />
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
