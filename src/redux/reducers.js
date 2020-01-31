import { combineReducers } from 'redux';
import { SET_MOVIES } from './actions';

function movieGallery(state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    default:
      return state;
  }
}


const movieApp = combineReducers({
  movies: movieGallery,
});

export default movieApp;
