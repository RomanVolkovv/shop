import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SidebarType = {
  isOpenSidebar: boolean;
};

const initialState: SidebarType = {
  isOpenSidebar: false,
};

const sidebar = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state, action: PayloadAction<undefined>) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
  },
});

export const { toggleSidebar } = sidebar.actions;

export default sidebar.reducer;
