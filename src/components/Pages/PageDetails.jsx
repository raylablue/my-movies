import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../Organisms/NavBar/NavBar';
import Footer from '../Organisms/Footer/Footer';
import { setMovies } from '../../redux/actions';

const getMovies = async () => {
  const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=44c3c47e');
  return response.json();
};

const Details = ({ dispatch }) => {
  const [title, setTitle] = useState();
  const [director, setDirector] = useState();
  const [poster, setPoster] = useState();
  const [genre, setGenre] = useState();
  const [released, setReleased] = useState();


  useEffect(() => {
    getMovies()
      .then(({
        Title, Director, Poster, Genre, Released,
      }) => {
        dispatch(setMovies(Title, Director, Poster, Genre, Released));
        setTitle(Title);
        setDirector(Director);
        setPoster(Poster);
        setGenre(Genre);
        setReleased(Released);
      });
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <h1>{title}</h1>
      <p>
        {director}
        |
        {genre}
        |
        {released}
      </p>
      <img
        src={poster}
        alt="movie poster"
      />

      <Footer />
    </>
  );
};

Details.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const DetailsConnect = connect()(Details);

export default DetailsConnect;
