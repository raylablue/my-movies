import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './FavButton.scss';

const FavButton = ({ movie }) => {
  const [favMovie, setFavMovie] = useState(false);
  const [btnClass, setBtnClass] = useState('');

  const updateBtnClass = (isActive) => {
    if (isActive) {
      setBtnClass('-active');
      return;
    }
    setBtnClass('');
  };

  useEffect(() => {
    const initialFavMovie = JSON.parse(localStorage.getItem(movie.imdbID));
    setFavMovie(initialFavMovie);
    updateBtnClass(initialFavMovie);
  }, [movie.imdbID]);

  const handleClick = () => {
    const newMovieValue = !favMovie;
    setFavMovie(newMovieValue);

    if (newMovieValue) {
      localStorage.setItem(movie.imdbID, JSON.stringify(movie));
    } else {
      localStorage.removeItem(movie.imdbID);
    }
    updateBtnClass(newMovieValue);
  };

  return (
    <div className={`a-fav-button ${btnClass}`}>
      <button
        type="button"
        className="btn btn-link"
        onClick={handleClick}
      >
        <FontAwesomeIcon
          className="fa-3x fas fa-heart a-fav-button__heart"
          data-fa-transform="shrink-10 up-5"
          icon={faHeart}
          id="heart"
        />
      </button>
    </div>
  );
};

FavButton.defaultProps = {
  movie: [],
};

FavButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.object,
};

export default FavButton;
