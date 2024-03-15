import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

const rootReducer = combineReducers({user: userReducer});

const persistedReducer = 

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})