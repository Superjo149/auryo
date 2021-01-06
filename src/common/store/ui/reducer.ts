import { createReducer } from 'typesafe-actions';
import { addToast, clearToasts, removeToast, setDimensions, setSearchQuery, resetStore } from '../actions';
import { UIState } from '../types';

const initialState: UIState = {
  toasts: [],
  // dimensions: {
  //   width: 0,
  //   height: 0
  // },
  searchQuery: undefined
};

export const uiReducer = createReducer<UIState>(initialState)
  .handleAction(clearToasts, state => {
    return {
      ...state,
      toasts: []
    };
  })
  .handleAction(addToast, (state, action) => {
    return {
      ...state,
      toasts: [...state.toasts, action.payload]
    };
  })
  .handleAction(removeToast, (state, action) => {
    return {
      ...state,
      toasts: [...state.toasts.filter(t => t.key === action.payload)]
    };
  })
  // .handleAction(setDimensions, (state, action) => {
  //   console.log('setDimensions', action.type, process.type);
  //   return {
  //     ...state,
  //     dimensions: action.payload
  //   };
  // })
  .handleAction(setSearchQuery, (state, action) => {
    return {
      ...state,
      searchQuery: action.payload.query
    };
  })
  .handleAction(resetStore, () => {
    return initialState;
  });
