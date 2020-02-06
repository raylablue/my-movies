import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieListConnect from '../Molecules/MovieList';
import { setMovies } from '../../redux/actions';
import './GalleryStyles.scss';
import NavBar from '../Organisms/NavBar/NavBar';
import Footer from '../Organisms/Footer/Footer';

const getMovies = async () => {
  const response = await fetch('http://www.omdbapi.com/?s=movies&i&apikey=44c3c47e');
  return response.json();
};

const Gallery = ({ dispatch }) => {
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
      <h1>Movies</h1>
      <MovieListConnect />
      <Footer />
    </>
  );
};

Gallery.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const GalleryConnect = connect()(Gallery);

export default GalleryConnect;
