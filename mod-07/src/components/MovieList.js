import React, { Component } from 'react';
import MovieListCard from './MovieListCard';

export default class MovieList extends Component {
  static displayName = 'MovieList';

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.movies !== this.props.movies;
  }

  render() {
    const { movies, onMovieClicked } = this.props;

    const result = (
      <div className="movies">
        {movies.map(movie => (
          <MovieListCard
            key={movie.id}
            movie={movie}
            onMovieClicked={onMovieClicked}
          />
        ))}
      </div>
    );

    return result;
  }
}
