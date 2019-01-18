import React from 'react';
import { shallow } from 'enzyme';

import MovieList from './MovieList';

test('can render wih no data', () => {
  const wrapper = shallow(<MovieList movies={[{ id: 1 }]} />);
  expect(wrapper.find('div.movies').length).toBe(1);
});
