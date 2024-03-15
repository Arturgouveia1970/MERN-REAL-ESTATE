import { configureStore } from '@reduxjs/toolkit';
import 

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})