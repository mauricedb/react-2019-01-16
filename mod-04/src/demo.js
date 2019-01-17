import { createIncrementAction } from './actions';
import { subscribe, dispatch } from './store';

const unsub = subscribe(state => console.log('Listener 1 ', state));

dispatch(createIncrementAction());

subscribe(state => console.log('Listener 2 ', state));

dispatch(createIncrementAction(5));

unsub();

dispatch(createIncrementAction(15));
