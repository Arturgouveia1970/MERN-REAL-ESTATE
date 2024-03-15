import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import sto

const rootReducer = combineReducers({user: userReducer});

const persistComfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistComfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store);