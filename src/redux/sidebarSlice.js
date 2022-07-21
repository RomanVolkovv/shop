import { createSlice } from '@reduxjs/toolkit';

const sidebar = createSlice({
  name: 'sidebar',
  initialState: {
    isOpenSidebar: false,
  },
  reducers: {
    toggleSidebar(state, action) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
  },
});

export const { toggleSidebar } = sidebar.actions;

export default sidebar.reducer;
