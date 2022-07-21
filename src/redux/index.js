import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
  },
});
