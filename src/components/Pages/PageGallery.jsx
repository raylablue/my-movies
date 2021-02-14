import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MovieListConnect from '../Molecules/MovieList';
import { setMovies } from '../../redux/actions';
import './GalleryStyles.scss';
import TemplateDefault from '../Templates/TemplateDefault';
import LoadingAnim from '../Atoms/LoadingAnim';

const Gallery = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      const response = await fetch('https://www.omdbapi.com/?s=movies&i&apikey=44c3c47e');
      const { Search } = await response.json();
      setIsLoading(false);

      if (Search) {
        const uniqueMovieIDs = {};
        const movieFilter = Search.filter((movie) => {
          if (uniqueMovieIDs[movie.imdbID]) return false;
          uniqueMovieIDs[movie.imdbID] = true;
          return true;
        });

        dispatch(setMovies(movieFilter));
        setMessage('Start a search to see more movies');
      } else {
        dispatch(setMovies([]));
        setMessage('Type something in the search bar to see realted movie titles');
      }
    };

    getMovies();
  }, [dispatch]);

  if (isLoading) {
    return (
      <TemplateDefault>
        <LoadingAnim />
      </TemplateDefault>
    );
  }

  return (
    <TemplateDefault>
      <div className="container">
        <h1>Movies</h1>
        <h3>{message}</h3>
        <MovieListConnect />
      </div>
    </TemplateDefault>
  );
};

export default Gallery;
