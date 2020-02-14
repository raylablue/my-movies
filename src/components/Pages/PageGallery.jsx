import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieListConnect from '../Molecules/MovieList';
import { setMovies } from '../../redux/actions';
import './GalleryStyles.scss';
import TemplateDefault from '../Templates/TemplateDefault';

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
    <TemplateDefault>
      <div className="container">
        <h1>Movies</h1>
        <MovieListConnect />
      </div>
    </TemplateDefault>
  );
};

Gallery.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const GalleryConnect = connect()(Gallery);

export default GalleryConnect;
