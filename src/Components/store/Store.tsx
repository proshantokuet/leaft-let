import { configureStore } from "@reduxjs/toolkit";
import { Type } from "typescript";
import counterReducer from "./Slice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});

export type Rootsate = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
