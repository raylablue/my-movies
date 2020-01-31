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

const Gallery = ({
  dispatch,
}) => {
  useEffect(() => {
    getMovies()
      .then(({ Search }) => {
        dispatch(setMovies(Search));
      });
  }, [dispatch]);

  return (
    <>
      <NavBar />
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
