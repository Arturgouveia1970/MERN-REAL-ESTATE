import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {user: userRe},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})