import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface HistorialState {
  id: number;
  user: string;
  artist: string;
  track: string;
}

const initialState: HistorialState[] = [];

export const historialSlice = createSlice({
  name: "historial",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((element) => element.id !== action.payload.id);
    },
    loadLocalData: (state, action) => {
      return action.payload;
    },
  },
});

export const { add, remove, loadLocalData } = historialSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHistorial = (state: RootState) => state.historial;

export default historialSlice.reducer;
