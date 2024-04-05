// MovieItem.js
import React from 'react';

function MovieItem({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Directed by: {movie.director}</p>
    </div>
  );
}

export default MovieItem;