let oldFetch = null;

function fetchMovie(id) {
  //   return Promise.resolve({
  //     id: 6534,
  //     title: 'Kill Bill: Volume 1'
  //   });
  return fetch(`/api/movies/${id}`).then(rsp => rsp.json());
}

describe('Can do an HTTP fetch', () => {
  beforeAll(() => {
    oldFetch = global.fetch;

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ id: 6534, title: 'Kill Bill: Volume 1' })
      })
    );
  });

  afterAll(() => {
    global.fetch = oldFetch;
  });

  test('for Kill Bill', async () => {
    expect(await fetchMovie(6534)).toMatchObject({
      id: 6534,
      title: 'Kill Bill: Volume 1'
    });
  });

  test('fetch should be used', async () => {
    await fetchMovie(6534);

    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith('/api/movies/6534');
  });
});
