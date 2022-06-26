import { createSelector } from "reselect";

const selectMovies = (state) => state.movies;

export const selectMoviesItems = createSelector(
  [selectMovies],
  (movies) => movies.moviesList
);
export const selectAllMovies = createSelector(
  [selectMovies],
  (movies) => movies.allMovies
);

export const selectCategoriesItems = createSelector(
  [selectMovies],
  (movies) => movies.categoriesList
);

export const selectMoviesPerPage = createSelector(
  [selectMovies],
  (movies) => movies.nbrMoviesPerPage
);

export const selectMoviesByPerPage = createSelector(
  [selectMoviesItems],
  [selectMoviesPerPage],
  (movies, nbrMoviesPerPage) => {
    const newm = movies
      .map((movie, i) => {
        if (nbrMoviesPerPage != 0 && i < nbrMoviesPerPage) {
          console.log(i);
          return movie;
        }
      })
      .filter((mov) => mov != undefined);
    console.log("new", newm);
  }
);

export const selectMoviesPerCategory = createSelector(
  [selectAllMovies],
  (movies) => {
    const options = movies.map((d) => ({
      value: d.id,
      label: d.category,
    }));
    const filteredArr = options.reduce((acc, current) => {
      const x = acc.find((item) => item.label === current.label);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    return filteredArr;
  }
);

export const selectReaction = createSelector(
  [selectMoviesItems],
  (movies) => movies.reaction
);
