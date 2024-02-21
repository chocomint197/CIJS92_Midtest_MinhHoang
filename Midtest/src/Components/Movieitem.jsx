import React from 'react'
import { data } from '../../Data'
export default function Movieitem({ movie, onhandleMovieClick }) {
    return (
      <div className="movie-item" onClick={() => onhandleMovieClick(movie)}>
        <div className="movie-img">
            <img src={movie.image[0]} alt={movie.movieName}/>
            <h3>Episode  {movie.episode}</h3>
        </div>
        <h3>{movie.movieName}</h3>
      </div>
    )
}
