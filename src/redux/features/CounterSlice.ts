import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type countType = {
  count: number;
};
const initialState: countType = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (starte) => {
      starte.count = starte.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByValue: (starte, action: PayloadAction<number>) => {
      starte.count = starte.count + action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
