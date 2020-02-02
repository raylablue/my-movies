import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieListConnect from '../Molecules/MovieList';
import { setMovies } from '../../redux/actions';
import './GalleryStyles.scss';
import NavBar from '../Organisms/NavBar/NavBar';
import Footer from '../Organisms/Footer/Footer';

const input = 'search';

const getMovies = async () => {
  const response = await fetch(`http://www.omdbapi.com/?s=${input}&i&apikey=44c3c47e`);
  return response.json();
};

const PageSearch = ({
  dispatch,
}) => {
  useEffect(() => {
    getMovies()
      .then(({ Search }) => {
        const uniqueMovieIDs = {};
        const movieFilter = Search.filter((movie) => {
          if (uniqueMovieIDs[movie.imdbID]) return false;
          uniqueMovieIDs[movie.imdbID] = true;
          return true;
        });

        dispatch(setMovies(movieFilter));
      });
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <h1>{input}</h1>
      <MovieListConnect />
      <Footer />
    </>
  );
};

PageSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const SearchConnect = connect()(PageSearch);

export default SearchConnect;
