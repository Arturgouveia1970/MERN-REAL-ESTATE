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
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});