import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import nameReducer from './NameSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer
  }
});

export default store;