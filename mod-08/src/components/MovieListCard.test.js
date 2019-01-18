import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import MovieListCard from './MovieListCard';

test('The MovieListCard can render', () => {
  const onMovieClicked = jest.fn();

  const wrapper = render(
    <MovieListCard
      movie={{
        title: 'The movie'
      }}
      onMovieClicked={onMovieClicked}
    />
  );

  fireEvent.click(wrapper.getByText('The: The movie'));

  expect(onMovieClicked).toHaveBeenCalledTimes(1);
});

test('snapshot', () => {
  expect({ x: 1, y: 2, z: 3 }).toMatchSnapshot();
});
