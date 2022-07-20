import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
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

export const { toggleSidebar } = todoSlice.actions;
export default todoSlice.reducer;
