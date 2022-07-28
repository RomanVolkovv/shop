import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import authReducer from './authSlice';
import switchAuthBtnReducer from './switchAuthButtonSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    switchAuthBtn: switchAuthBtnReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
