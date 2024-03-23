import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "../features/time/timeSlice";

export const store = configureStore({
  reducer: {
    time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {time: TimeState}
export type AppDispatch = typeof store.dispatch;
