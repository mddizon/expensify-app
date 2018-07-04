import {createStore} from 'redux';

const incrementCount = ({ incrementBy: by = 1 } = {}) => ({
    type: 'INCREMENT',
    by
});

const decrementCount = ({ by = 1 } = {}) => ({
  type: 'DECREMENT',
  by
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({ to }) => ({
  type: 'SET',
  to
});

//Reducers

const countReducer = (state = { count: 0 }, action)=> {
  switch(action.type) {
    case "INCREMENT":
      return { count: state.count + action.by };
    case "DECREMENT":
      return { count: state.count - action.by };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.to };
    default:
      return state;
  }
  return state;
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ to: 20 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ by: 5 }));