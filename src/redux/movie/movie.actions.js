import MovieActionsTypes from "./movie.types";

export const setMovie = () => ({
  type: MovieActionsTypes.SET_MOVIE,
});
export const fetchSuccess = (movies) => ({
  type: MovieActionsTypes.FETCH_SUCCESS,
  payload: movies,
});

export const setPerPage = () => ({
  type: MovieActionsTypes.SET_PER_PAGE,
});

export const setPerPageSuccess = (perPage) => ({
  type: MovieActionsTypes.SET_PER_PAGE_SUCCESS,
  payload: perPage,
});

export const setMoviesList = (movies) => ({
  type: MovieActionsTypes.SET_MOVIES_LIST,
  payload: movies,
});
export const deleteMovie = (item) => ({
  type: MovieActionsTypes.DELETE_MOVIE,
  payload: item,
});
export const reactionToMovie = (reaction) => ({
  type: MovieActionsTypes.MOVIE_REACTION,
  payload: reaction,
});
export const setMoviesPerPage = (total) => ({
  type: MovieActionsTypes.SET_MOVIE_PER_PAGE,
  payload: total,
});
export const filterByCategory = (category) => ({
  type: MovieActionsTypes.FILTER_BY_CATEGORY,
  payload: category,
});

export const fetchByCategorySuccess = (response) => ({
  type: MovieActionsTypes.FILTER_BY_CATEGORY_SUCCESS,
  payload: response,
});

export const setCategories = (category) => ({
  type: MovieActionsTypes.SET_CATEGORIES,
  payload: category,
});
