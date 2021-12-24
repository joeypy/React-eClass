import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AuthState {
  token: string;
  id_client: string;
}

const initialState: AuthState = {
  token: null,
  id_client: '90bff2091ffe456d8f39bb64533e91d0',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    set: (state, action) => {
      state.token = action.payload;
    },
    clear: (state) => {
      return {
        token: null,
        id_client: '90bff2091ffe456d8f39bb64533e91d0',
      };
    },
  },
});

export const { set, clear } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
