import { call, put, takeEvery } from "redux-saga/effects";
import { movies$ } from "../../Movies";
import {
  fetchByCategorySuccess,
  fetchSuccess,
  setPerPageSuccess,
} from "./movie.actions";
import MovieActionsTypes from "./movie.types";

async function apiFetchFoo() {
  return await movies$;
}

export function* fetchMovies() {
  try {
    console.log("fetch movies");
    const response = yield call(apiFetchFoo);

    yield put(fetchSuccess(response));
  } catch (error) {
    console.log("error", error);
  }
}
export function* onfetchMovies() {
  yield takeEvery(MovieActionsTypes.SET_MOVIE, fetchMovies);
}

export function* perPage() {
  try {
    yield console.log("yield perPage");
    yield put(setPerPageSuccess(4));
  } catch (error) {
    console.log("error", error);
  }
}

export function* onSetPerPage() {
  yield takeEvery(MovieActionsTypes.SET_PER_PAGE, perPage);
}

export function* fetchByCategory() {
  try {
    yield console.log("helloo category");
    // yield put(fetchByCategorySuccess());
  } catch (error) {
    console.log("error", error);
  }
}

export function* onFetchByCategory() {
  yield takeEvery(MovieActionsTypes.FILTER_BY_CATEGORY, fetchByCategory);
}

export function* setCategories() {
  try {
    yield console.log("set category");
  } catch (error) {
    console.log("error", error);
  }
}
export function* onSetCategories() {
  yield takeEvery(MovieActionsTypes.SET_CATEGORIES, setCategories);
}
