import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as Dispatcher,
  useSelector as Selector
} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import commonReducer from "./reducer";

export const store = configureStore({
  reducer: commonReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = Dispatcher;
export const useSelector: TypedUseSelectorHook<RootState> = Selector;
