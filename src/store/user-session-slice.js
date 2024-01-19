import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  timeLeft: 0
};

export const userSessionSlice = createSlice({
  name: 'userSession',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.timeLeft = 10;
    },
    logout: (state) => {
      state.user = null;
    },
    sessionTick: (state) => {
      state.timeLeft--; 
      if (state.timeLeft <= 0) {
        state.user = null;
      }
    },
  },
});

export const { login, logout, sessionTick } = userSessionSlice.actions;
export const userSessionReducer = userSessionSlice.reducer;
