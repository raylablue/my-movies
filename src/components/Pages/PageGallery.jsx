import React, { useState, useEffect } from 'react';
import './GalleryStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
      <div className="container-fluid">
        <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">

          {dataError ? dataError.toString() : null}

          {movieArray.map((movie) => (
            <div
              className="my-4 mx-3 p-1 p-gallery__card"
            >
              <div className="p-gallery__poster-container">
                <img
                  src={movie.Poster}
                  alt="Movie Poster"
                  className="p-gallery__poster"
                />
              </div>
              <h4 className="p-gallery__title">
                {movie.Title}
              </h4>

              <a
                className="mx-4 my-1"
                href="/fav"
              >
                <FontAwesomeIcon
                  className="fa-3x fas fa-heart"
                  data-fa-transform="shrink-10 up-5"
                  icon={faHeart}
                  id="ticket"
                />
              </a>

            </div>
          ))}


        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
