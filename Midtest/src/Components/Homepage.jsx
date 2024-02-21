import React, { useState } from "react";
import Movielist from "./Movielist";
import { data } from "../../Data";

export default function Homepage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="homepage">
      <div className="header">
        <h2>Anoanime</h2>
        <ul>
          <li>Home</li>
          <li>List online</li>
        </ul>
        <input type="text" placeholder="Search anime or movie" />
      </div>
      <div className="content">
        <div className="explore">
          <h3>Explore</h3>
          <p>What are you gonna watch today</p>
          <div className="carousel">
            {selectedMovie ? (
              <div className="carousel-item active">
                <img src={selectedMovie.image[1]} />
                <div className="carousel-caption">
                  <h3>{selectedMovie.movieName}</h3>
                  <p>{selectedMovie.description}</p>
                </div>
              </div>
            ) : (
              <div className="carousel-item active">
                <img src={data[0].image[1]} />
                <div className="carousel-caption">
                  <h3>{data[0].movieName}</h3>
                  <p>{data[0].description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="new-release">
          <h3>New release</h3>
          <Movielist data={data} onhandleMovieClick={handleMovieClick} />
        </div>
      </div>
    </div>
  );
}
