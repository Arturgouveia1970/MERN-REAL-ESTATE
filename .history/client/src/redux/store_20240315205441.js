import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({user: userReducer});

const persistComfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistComfig, rootReducer)

export const store = configureStore({
  reducer: Reducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})