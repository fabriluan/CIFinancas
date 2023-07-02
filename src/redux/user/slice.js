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

    logoutUser: (state, action) => {
      localStorage.removeItem('@CIF');

      state.user = action.payload;
    },

  },
});

export const { registerUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
