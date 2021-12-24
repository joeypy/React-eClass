import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Songs {
  artist: string;
  title: string;
  uri: string;
  albumUrl: string;
}

export interface SongState {
  list_songs: Array<Songs>;
  historial: Array<Songs>;
}

const initialState: SongState = {
  list_songs: [],
  historial: [],
};

export const songSlice = createSlice({
  name: 'songs',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setSongs: (state, action) => {
      state.list_songs = action.payload;
    },
    setHistorial: (state, action) => {
      state.historial = action.payload;
    },
  },
});

export const { setSongs, setHistorial } = songSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSong = (state: RootState) => state.songs;

export default songSlice.reducer;
