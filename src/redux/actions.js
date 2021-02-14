/*
 * action types
 */
export const SET_MOVIES = 'SET_MOVIES';

/*
 * action creators
 */
export function setMovies(movies) {
  return { type: SET_MOVIES, movies };
}
