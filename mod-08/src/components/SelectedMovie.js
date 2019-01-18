import React from 'react';
import errorBoundary from './errorBoundary';
import { shape, string, arrayOf } from 'prop-types';

const SelectedMovie = ({ selected, onMovieCleared }) => (
  <div className="details">
    <div className="detail">
      <div className="detail-header">
        <h4>{selected.title}</h4>
        <span className="close-button" role="button" onClick={onMovieCleared}>
          &times;
        </span>
      </div>
      <img src={selected.image} alt={selected.title} />
      <div>{selected.overview}</div>
      <ul>
        {selected.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  </div>
);

SelectedMovie.propTypes = {
  selected: shape({
    title: string.isRequired,
    image: string.isRequired,
    overview: string.isRequired,
    genres: arrayOf(string).isRequired
  }).isRequired
};


SelectedMovie.displayName = 'SelectedMovie'

export default errorBoundary(SelectedMovie);
