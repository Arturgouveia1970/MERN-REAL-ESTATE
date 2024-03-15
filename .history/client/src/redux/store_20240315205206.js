import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({user: userReducer});

const persistComfig = {
  key: 'root',
  storage,
  
}

const persistedReducer = persistReducer(persistComfig, rootReducer)

export const store = configureStore({
  reducer: {user: userReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})