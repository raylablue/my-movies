import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function MovieCard() {
  return (
    <div className="card">
      <div className="card-body">

        <a
          className="navbar-brand"
          href="/fav"
        >
          <FontAwesomeIcon
            className="far fa-heart"
            icon={faHeart}
          />
        </a>

      </div>
    </div>
  );
}

export default MovieCard;
