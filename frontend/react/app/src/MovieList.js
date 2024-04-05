
import React from 'react';
import MovieItem from './MovieItem';

function MovieList() {
  const movies = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan' },
    { id: 2, title: 'Interstellar', director: 'Christopher Nolan' },
    { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' }
  ];

  return (
    <div>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
