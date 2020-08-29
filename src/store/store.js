// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {
    compact: false,
    nightmode: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'CHANGE_VIEW_COMPACT':
        return {...state, compact: action.payload};
        case 'CHANGE_VIEW_MODE':
            return {...state, nightmode: action.payload};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }