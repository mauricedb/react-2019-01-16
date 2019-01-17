import { createStore } from 'redux';

const actions = {
  INCREMENT: (state, action) => ({
    ...state,
    counter: state.counter + action.payload
  }),
  default: state => state
};

function reducer(state = { counter: 0, firstName: 'Maurice' }, action) {
  console.log(state, action);

  const fn = actions[action.type] || actions.default;
  return fn(state, action);

  //   switch (action.type) {
  //     case 'INCREMENT':
  //       return { ...state, counter: state.counter + action.payload };
  //     default:
  //       return state;
  //   }
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
