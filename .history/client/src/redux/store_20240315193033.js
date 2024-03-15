import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {user:},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})