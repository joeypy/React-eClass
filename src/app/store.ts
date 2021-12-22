import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import historialReducer from "../features/historial/historialSlice";
import { updateStateFromLocalStore } from "./localStore";

export const store = configureStore({
  reducer: {
    historial: historialReducer,
  },
});

store.subscribe(() => {
  let data = store.getState();
  updateStateFromLocalStore(data.historial);
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
