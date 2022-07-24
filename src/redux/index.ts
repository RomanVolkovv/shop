import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
