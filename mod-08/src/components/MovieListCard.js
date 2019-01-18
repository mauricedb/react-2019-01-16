import React from 'react';

export default function MovieListCard({ movie, onMovieClicked }) {
  const result = (
    <div className="movie" onClick={() => onMovieClicked(movie)}>
      <h4>{movie.title}</h4>
      <img src={movie.image} alt={movie.title} />
      <div>{movie.overview}</div>
    </div>
  );

  return result;
}

MovieListCard.displayName = 'MovieListCard';
