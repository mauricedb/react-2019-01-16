let store = {
  counter: 0,
  name: 'Maurice'
};

let listeners = [];

export function subscribe(listener) {
  listeners.push(listener);

  return () => (listeners = listeners.filter(l => l !== listener));
}

export function dispatch(action) {
  console.log('dispatch', action);

  if (action.type === 'INCREMENT') {
    // Fout
    // store.counter = store.counter + action.payload.value;

    // store = Object.assign({}, store, {
    //   counter: store.counter + action.payload.value
    // });

    store = { ...store, counter: store.counter + action.payload.value };
  }

  listeners.forEach(l => l(store));
}
