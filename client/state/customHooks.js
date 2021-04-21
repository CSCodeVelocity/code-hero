import { useReducer } from 'react';

export const useReducerThunk = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchThunk = action => {
    if (typeof action === 'function') {
      return action(dispatch);
    }
    return dispatch(action);
  };

  return [state, dispatchThunk];
};
