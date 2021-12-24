import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/authentication/authSlice';
import songReducer from '../features/songs/songSlice';
import { updateStateFromLocalStore } from './localStore';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    songs: songReducer,
  },
});

// store.subscribe(() => {
//   let data = store.getState();
//   updateStateFromLocalStore(data.historial);
// });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
