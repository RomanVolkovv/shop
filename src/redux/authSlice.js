import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    isOpenAuthModal: false,
  },
  reducers: {
    openAuthModal(state, action) {
      state.isOpenAuthModal = true;
    },
    closeAuthModal(state, action) {
      state.isOpenAuthModal = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = auth.actions;

export default auth.reducer;
