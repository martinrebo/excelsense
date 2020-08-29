// store.js
import React, {createContext, useReducer} from 'react';

const initialState = {
    layout: "large",
    nightmode: false
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'CHANGE_VIEW_LAYOUT':
        return {...state, layout: action.payload};
        case 'CHANGE_VIEW_COLOR':
            return {...state, color: action.payload};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }