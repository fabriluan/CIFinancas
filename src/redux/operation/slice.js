import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  operation: [],
};

const operationSlice = createSlice({
  name: 'operation',
  initialState,
  reducers: {

    addOperation: async (state, action) => {
      state.operation = [...state.operation, action.payload];
    },
  },
});

export const { addOperation } = operationSlice.actions;

export default operationSlice.reducer;
