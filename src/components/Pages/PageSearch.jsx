import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieListConnect from '../Molecules/MovieList';
import { setMovies } from '../../redux/actions';
import './GalleryStyles.scss';
import TemplateDefault from '../Templates/TemplateDefault';
import LoadingAnim from '../Atoms/LoadingAnim';

const PageSearch = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);

      const response = await fetch(`http://www.omdbapi.com/?s=${id}&i&apikey=44c3c47e`);
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
        setMessage('These movies were found related to your search');
      } else {
        dispatch(setMovies([]));
        setMessage('Sorry, your search returned no results. Please try again');
      }
    };

    getMovies();
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <TemplateDefault>
        <LoadingAnim />
      </TemplateDefault>
    );
  }

  return (
    <TemplateDefault>
      <h1>
        Search:
        &quot;
        {id}
        &quot;
      </h1>

      <h2>{message}</h2>

      <MovieListConnect />
    </TemplateDefault>
  );
};

export default PageSearch;
