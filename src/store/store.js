import { configureStore } from '@reduxjs/toolkit';
import { jokeReducer } from './joke-slice';
import { userSessionReducer } from './user-session-slice';

export const store = configureStore({
  reducer: {
    jokeSlice: jokeReducer,
    userSessionSlice: userSessionReducer
  },
});