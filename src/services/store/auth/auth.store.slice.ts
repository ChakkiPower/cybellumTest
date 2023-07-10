import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../core/store';
import { AuthState, LoginResponse } from '../../../models';

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken'),
  user: JSON.parse(localStorage.getItem('user') as string),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthContext: (state, action: PayloadAction<LoginResponse>) => {
      const { accessToken, user } = action.payload;

      state.accessToken = accessToken;
      state.user = user;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('user', JSON.stringify(user));
    },
    removeAuthContext: (state) => {
      state.accessToken = null;
      state.user = null;
      localStorage.clear();
    },
  },
});

export const { setAuthContext, removeAuthContext } = authSlice.actions;

export const authReducer = authSlice.reducer;

export const selectCoreAccessToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentUser = (state: RootState) => state.auth.user;
