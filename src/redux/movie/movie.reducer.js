import MovieActionsTypes from "./movie.types";
import { deleteMovie } from "./movie.utils";

const INITIAL_STATE = {
  loading: false,
  moviesList: [],
  categoriesList: [],
  allMovies: [],
  nbrMoviesPerPage: 0,
  currentPage: 1,
  totalPages: 0,
  reaction: null,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieActionsTypes.FETCH_SUCCESS: {
      return {
        ...state,
        moviesList: action.payload,
        allMovies: action.payload,
      };
    }
    case MovieActionsTypes.SET_PER_PAGE_SUCCESS: {
      return {
        ...state,
        nbrMoviesPerPage: action.payload,
      };
    }
    case MovieActionsTypes.SET_MOVIES_LIST: {
      return {
        ...state,
        moviesList: action.payload.moviesList,
        loading: action.payload.loading,
        categoriesList: action.payload.categoriesList,
      };
    }
    case MovieActionsTypes.DELETE_MOVIE: {
      const movies = state.moviesList;
      const { movieId } = action.payload;
      const updateMovies = movies.filter((movie) => movie.id !== movieId);
      return {
        ...state,
        moviesList: updateMovies,
      };
    }
    case MovieActionsTypes.MOVIE_REACTION: {
      const movies = state.moviesList;
      const { reactionType, movieId } = action.payload;
      const updatedMovies = movies.map((movie) => {
        if (movie.id === movieId) {
          movie.reaction = reactionType;
        }
        return movie;
      });

      return {
        ...state,
        moviesList: updatedMovies,
      };
    }
    case MovieActionsTypes.SET_MOVIE_PER_PAGE: {
      return {
        ...state,
        nbrMoviesPerPage: action.payload,
      };
    }
    case MovieActionsTypes.FILTER_BY_CATEGORY: {
      const movies = state.allMovies;
      const allMovies = state.allMovies;
      const categoriesFilter = action.payload;

      if (categoriesFilter.length === 0) {
        return {
          ...state,
          moviesList: allMovies,
        };
      }
      const data = [];
      const filteredMovies = categoriesFilter.map((cat) => {
        movies.filter((movie) => movie.category === cat && data.push(movie));

        return data;
      });

      console.log("filteredMovies", data);
      return {
        ...state,
        moviesList: filteredMovies[0],
      };
    }
    case MovieActionsTypes.FILTER_BY_CATEGORY_SUCCESS: {
      return {
        ...state,
      };
    }
    case MovieActionsTypes.SET_CATEGORIES: {
      console.log("payload action", action);
      const movies = state.moviesList;
      const { category } = action.payload;
      const allMovies = state.allMovies;

      const catChecker = movies.find((item) => item.category === category);

      if (!catChecker) {
        console.log("category", category, "has been deleted");
        const filteredCategories = allMovies
          .map((movie) => movie)
          .filter((el) => el.category !== category);

        console.log("allMo inside ", allMovies, filteredCategories);
        return {
          ...state,
          allMovies: filteredCategories,
        };
      }
      console.log("allMo", allMovies);

      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
