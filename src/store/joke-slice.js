import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  joke: null,
  loading: 'idle'
};

export const fetchJoke = createAsyncThunk('Fetch joke',
  async (category, { getState }) => {
    const { loading } = getState().jokeSlice;
    if (loading !== 'pending') {
      return
    }
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    const data = await response.json();
    return data.value
  }
)

export const jokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {
  },
  extraReducers: (builder =>
    builder
      .addCase(fetchJoke.pending, (state) => {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        if (
          state.loading === 'pending'
        ) {
          state.loading = 'idle'
          state.joke = action.payload
        }
      })
  )
});

export const { } = jokeSlice.actions;
export const jokeReducer = jokeSlice.reducer;
