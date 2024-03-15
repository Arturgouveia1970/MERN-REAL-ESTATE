import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser = null,
  error: null,
  loading: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});