import React from 'react';
import MovieList from './MovieList';
import SelectedMovie from './SelectedMovie';

export default function MoviesPresentation({
  movies,
  onMovieClicked,
  selected,
  onMovieCleared
}) {
  return (
    <div>
      <div className="container">
        <MovieList
          movies={movies}
          onMovieClicked={onMovieClicked}
          style={{ color: 'red' }}
        >
          div
        </MovieList>
        {selected && (
          <SelectedMovie
            key={selected.id}
            selected={selected}
            onMovieCleared={onMovieCleared}
          />
        )}
      </div>
    </div>
  );
}
