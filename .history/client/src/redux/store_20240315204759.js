import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

const rootReducer = com

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})