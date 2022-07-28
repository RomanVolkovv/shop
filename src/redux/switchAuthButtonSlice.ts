import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SwitchAuthButtonSliceType = {
  page: string;
};

const initialState: SwitchAuthButtonSliceType = {
  page: 'signIn',
};

const switchAuthButtonSlice = createSlice({
  name: 'switchAuthButtonSlice',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<undefined>) {
      state.page = 'signIn';
    },
    signOn(state, action: PayloadAction<undefined>) {
      state.page = 'signOn';
    },
  },
});

export const { signIn, signOn } = switchAuthButtonSlice.actions;

export default switchAuthButtonSlice.reducer;
