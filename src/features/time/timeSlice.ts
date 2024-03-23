import { createSlice } from "@reduxjs/toolkit";

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
  isOn: boolean;
}

const initialState: TimeState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  isOn: false,
};

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    start: (state) => {
      state.isOn = true;
    },
    stop: (state) => {
      state.isOn = false;
    },
    tick: (state) => {
      if (state.isOn) {
        state.seconds++;
        if (state.seconds === 60) {
          state.minutes++;
          state.seconds = 0;
        }
        if (state.minutes === 60) {
          state.hours++;
          state.minutes = 0;
        }
      }
    },
  },
});

export default timeSlice.reducer;
export const { reset, start, tick, stop } = timeSlice.actions;
