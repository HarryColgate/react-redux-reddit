import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    subreddits: subredditsReducer
  },
});
