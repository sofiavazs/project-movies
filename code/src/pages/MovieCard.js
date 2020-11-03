import React from 'react'; 
import { Link } from 'react-router-dom'; 

export const MovieCard = ({id, poster_path, original_title, release_date}) => {

  return (
    <>
    <Link to={`/movies/${id}`}>
      <div className="movie-card-container">
        <img className="movie-card-image" 
          src={`https://image.tmdb.org/t/p/w780/${poster_path}`} 
          alt={`${`original_title`}poster`} />
          <h2>{original_title}</h2>
          <p>{`Released on:${release_date}`}</p>
      </div>
    </Link>
  </>
)};
