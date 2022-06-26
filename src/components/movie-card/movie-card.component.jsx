import React from "react";
import thumbsUp from "../../assets/thumbs-up.svg";
import thumbsDown from "../../assets/thumb-down.svg";

import "./movie-card.styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovie,
  reactionToMovie,
  setCategories,
} from "../../redux/movie/movie.actions";

export const MovieCard = (props) => {
  const dispatch = useDispatch();

  let {
    movie: { category, title, id: movieId, likes, dislikes, reaction },
  } = props;

  const handleReaction = (reactionType, movieId) => {
    dispatch(reactionToMovie({ reactionType, movieId }));
  };
  const handleDelete = (movieId, category) => {
    dispatch(deleteMovie({ movieId }));
    dispatch(setCategories({ category }));
  };

  return (
    <li className="cards_item">
      <div className="card">
        <div
          className="remove-button"
          onClick={() => handleDelete(movieId, category)}
        >
          &#10005;
        </div>
        <div className="card_image">
          <div className="rating">
            <div
              onClick={() => dispatch(handleReaction("LIKE", movieId))}
              className="thumb-up"
            >
              <img src={thumbsUp} alt="thumbs-up" />
              <p>{reaction === "LIKE" ? ++likes : likes}</p>
            </div>
            <div onClick={() => dispatch(handleReaction("DISLIKE", movieId))}>
              <img src={thumbsDown} alt="thumbs-down" />
              <p>{reaction === "DISLIKE" ? ++dislikes : dislikes}</p>
            </div>
          </div>
          <img src="https://picsum.photos/500/300/?image=10" />
        </div>
        <div className="card_content">
          <h2 className="card_title">{props.movie.title}</h2>
          <p className="card_text">{props.movie.category}</p>
        </div>
      </div>
    </li>
  );
};
