import { all, call } from "redux-saga/effects";

import {
  onFetchByCategory,
  onfetchMovies,
  onSetCategories,
  onSetPerPage,
} from "./movie/movie.sagas";
export function* rootSaga() {
  //yield all([onSignInStart()])
  yield all([
    call(onfetchMovies),
    call(onSetPerPage),
    call(onFetchByCategory),
    call(onSetCategories),
  ]);
}
