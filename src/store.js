import {  compose } from 'redux';
import movieReducer from './reducers/movieReducer';
import { configureStore } from '@reduxjs/toolkit';
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('movies');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('movies', serializedState);
  } catch {
  }
};

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({
    reducer: movieReducer,
    preloadedState: persistedState,

  });

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
