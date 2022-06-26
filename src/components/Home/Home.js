import React, { Component, useEffect, useState } from "react";
import Select from "react-select";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoriesItems,
  selectMoviesItems,
  selectMoviesPerCategory,
} from "../../redux/movie/movie.selectors";
import { MovieCard } from "../movie-card/movie-card.component";
import ReactPaginate from "react-paginate";
import { filterByCategory } from "../../redux/movie/movie.actions";

const options = [4, 8, 12];

const Home = () => {
  const dispatch = useDispatch();

  const [pageNumber, setPageNumber] = useState(0);
  const [moviesPerPage, setMoviesPerpage] = useState(4);

  const pagesVisited = pageNumber * moviesPerPage;

  const moviesList = useSelector(selectMoviesItems);
  const moviesCatgeories = useSelector(selectMoviesPerCategory);

  const onFilter = (e) => {
    const filteredCat = [];
    e.forEach(function (category) {
      filteredCat.push(category.label);
    });
    dispatch(filterByCategory(filteredCat));
  };

  const renderPagination = moviesList
    .slice(pagesVisited, pagesVisited + moviesPerPage)
    .map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const pageCount = Math.ceil(moviesList.length / moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const styles = {
    width: "50%",
  };

  return (
    <div className="home">
      <div className="row">
        <div className="mt-3 col-sm-6 col-md-6">
          <Select
            options={moviesCatgeories}
            onChange={(e) => onFilter(e)}
            isMulti
            styles={styles}
          />
        </div>
        <div className="mt-3 col-sm-6 col-md-6 ml-10">
          <select
            className="form-select col-xs-3"
            placeholder="Nombre de résultat par page"
            value={moviesPerPage}
            onChange={(e) => setMoviesPerpage(+e.target.value)}
          >
            {options.map((perPageOption) => (
              <option key={perPageOption} value={perPageOption}>
                Show {perPageOption} per page
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="movie-list">
        <ul className="cards">{renderPagination}</ul>
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextlabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Home;
