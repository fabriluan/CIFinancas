import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    registerUser: (state, action) => {
      state.user = action.payload;

      localStorage.setItem('@CIF', JSON.stringify(state.user));
    },

  },
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
