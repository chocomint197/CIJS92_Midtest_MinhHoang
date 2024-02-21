import React from "react";
import Movieitem from "./Movieitem";
import { data } from "../../Data"
export default function Movielist({ onhandleMovieClick }) {
  return (
    <div className="movie-list">
      {data.map((movie) => (
        <Movieitem key={movie.id} movie={movie} onhandleMovieClick={onhandleMovieClick} />
      ))}
    </div>
  );
}
