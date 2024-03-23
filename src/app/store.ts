import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import timeReducer from "../features/time/timeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {user: UserState, time: TimeState}
export type AppDispatch = typeof store.dispatch;
