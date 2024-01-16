import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/CounterSlice";
import Logger from "./middleware/logger";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(Logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;