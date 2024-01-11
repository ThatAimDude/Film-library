import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard'; 
import { Link } from 'react-router-dom'; 


const MovieList = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div>
      <div>
        {movies.map((movie, index) => (
          <Link key={index} to={`/movie/${index}`}>
            <MovieCard key={index} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
