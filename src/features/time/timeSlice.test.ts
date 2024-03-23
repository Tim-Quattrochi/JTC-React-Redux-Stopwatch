import { describe, it, expect } from "vitest";
import { timeSlice } from "./timeSlice";

describe("timeSlice", () => {
  it("should reset the state", () => {
    const initialState = {
      isOn: true,
      seconds: 30,
      minutes: 10,
      hours: 1,
    };
    const resetAction = timeSlice.actions.reset();
    const newState = timeSlice.reducer(initialState, resetAction);
    expect(newState).toEqual({
      isOn: false,
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  });

  it("should start the timer", () => {
    const initialState = {
      isOn: false,
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    const startAction = timeSlice.actions.start();
    const newState = timeSlice.reducer(initialState, startAction);
    expect(newState.isOn).toBe(true);
  });

  it("should stop the timer", () => {
    const initialState = {
      isOn: true,
      seconds: 30,
      minutes: 10,
      hours: 1,
    };
    const stopAction = timeSlice.actions.stop();
    const newState = timeSlice.reducer(initialState, stopAction);
    expect(newState.isOn).toBe(false);
  });

  it("should increment the time by 1 second", () => {
    const initialState = {
      isOn: true,
      seconds: 30,
      minutes: 10,
      hours: 1,
    };
    const tickAction = timeSlice.actions.tick();
    const newState = timeSlice.reducer(initialState, tickAction);
    expect(newState).toEqual({
      isOn: true,
      seconds: 31,
      minutes: 10,
      hours: 1,
    });
  });

  it("should increment the time by 1 minute", () => {
    const initialState = {
      isOn: true,
      seconds: 59,
      minutes: 10,
      hours: 1,
    };
    const tickAction = timeSlice.actions.tick();
    const newState = timeSlice.reducer(initialState, tickAction);
    expect(newState).toEqual({
      isOn: true,
      seconds: 0,
      minutes: 11,
      hours: 1,
    });
  });

  it("should increment the time by 1 hour", () => {
    const initialState = {
      isOn: true,
      seconds: 59,
      minutes: 59,
      hours: 1,
    };
    const tickAction = timeSlice.actions.tick();
    const newState = timeSlice.reducer(initialState, tickAction);
    expect(newState).toEqual({
      isOn: true,
      seconds: 0,
      minutes: 0,
      hours: 2,
    });
  });
});
