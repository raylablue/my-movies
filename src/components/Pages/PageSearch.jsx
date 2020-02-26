import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import MovieListConnect from '../Molecules/MovieList';
import { setMovies } from '../../redux/actions';
import './GalleryStyles.scss';
import TemplateDefault from '../Templates/TemplateDefault';
import LoadingAnim from '../Atoms/LoadingAnim';

const getMovies = async (id) => {
  const response = await fetch(`http://www.omdbapi.com/?s=${id}&i&apikey=44c3c47e`);
  return response.json();
};

const PageSearch = ({ dispatch }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const updateLoading = (isActive) => {
    if (isActive) {
      setIsLoading(true);
      return;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    updateLoading(isLoading);

    getMovies(id)
      .then(({ Search }) => {
        if (Search !== undefined) {
          const uniqueMovieIDs = {};
          const movieFilter = Search.filter((movie) => {
            if (uniqueMovieIDs[movie.imdbID]) return false;
            uniqueMovieIDs[movie.imdbID] = true;
            return true;
          });
          dispatch(setMovies(movieFilter));
        } else {
          dispatch(setMovies([]));
        }
      });
    setIsLoading(false);
  }, [dispatch, id]);

  // function responseValue() {
  //   getMovies(id).then(({ Response }) => {
  //     console.log('response in function', Response);
  //     if (Response === 'True') {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  // responseValue();
  // console.log('responseValue()', responseValue());

  if (isLoading === true) {
    return (
      <TemplateDefault>
        <LoadingAnim />
      </TemplateDefault>
    );
  }

  // if (responseValue() === false) {
  //   return (
  //     <TemplateDefault>
  //       <h2>nope</h2>
  //     </TemplateDefault>
  //   );
  // }
  return (
    <TemplateDefault>
      <h1>
        Search:
        &quot;
        {id}
        &quot;
      </h1>
      <h2>These movies were found related to your search</h2>
      <MovieListConnect />
    </TemplateDefault>
  );
};

PageSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const SearchConnect = connect()(PageSearch);

export default SearchConnect;
