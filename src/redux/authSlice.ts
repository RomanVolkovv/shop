import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthStateType = {
  isOpenAuthModal: boolean;
};

const initialState: AuthStateType = {
  isOpenAuthModal: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openAuthModal(state, action: PayloadAction<undefined>) {
      state.isOpenAuthModal = true;
    },
    closeAuthModal(state, action: PayloadAction<undefined>) {
      state.isOpenAuthModal = false;
    },
  },
});

export const { openAuthModal, closeAuthModal } = auth.actions;

export default auth.reducer;
