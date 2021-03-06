import React, { useEffect, useState } from "react";

import { apiKey } from "../key";
import { MovieCard } from "../components/MovieCard";

export const MovieList = () => { 
  const [moviesList, setMoviesList] = useState ([]);

    useEffect (() => {
      const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
      fetch (moviesUrl)
        .then((response) => response.json())
        .then ((json) => { 
          setMoviesList(json.results) 
        })
        .catch((error) => {
          console.error('Request failed', error)
        })
      }, []);

  return (
    <section className="movie-cards-container">
      {moviesList.map((movie) => (
      <MovieCard key= {movie.id} {...movie} />
      ))}
    </section> 
  );
};