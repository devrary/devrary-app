import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSlice from '@/src/redux/slice/appSlice';
import authSlice from '@/src/redux/slice/authSlice';
import modalSlice from '@/src/redux/slice/modalSlice';
import errorSlice from '@/src/redux/slice/errorSlice';

const rootReducer = combineReducers({
  app: appSlice,
  auth: authSlice,
  modal: modalSlice,
  error: errorSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
