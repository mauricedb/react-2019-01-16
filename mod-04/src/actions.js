export function createIncrementAction(value = 1) {
    const action = {
      type: 'INCREMENT',
      payload: {
        value: value
      },
      error: null
    };
    return action;
  }
  