import React, { useState, useEffect } from 'react';
import NavBar from '../Organisms/NavBar/NavBar';
import Footer from '../Organisms/Footer/Footer';

const getMovies = async () => {
  let data = { Search: [] };
  let resError = null;

  try {
    const response = await fetch('http://www.omdbapi.com/?s=movies&i&apikey=44c3c47e');
    data = await response.json();
  } catch (e) {
    resError = e;
  }
  return {
    error: resError,
    data,
  };
};

function Gallery() {
  const [movieArray, setMovieArray] = useState([]);
  const [dataError, setError] = useState();

  useEffect(() => {
    getMovies()
      .then(({ data, error }) => {
        setError(error);
        setMovieArray(data.Search);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div>
        {dataError ? dataError.toString() : null}

        {movieArray.map((movie) => (
          <img src={movie.Poster} alt="Movie Poster" />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
