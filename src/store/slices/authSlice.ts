import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthSlice {
  uid: string | null;
  email: string | null;
  password: string | null;
  status: string | null;
  errorMessage: string | null;
}

interface User {
  uid: string;
  email: string;
  password: string;
  errorMessage?: string,

}

const initialState: AuthSlice = {
  uid: null,
  email: null,
  password: null,
  status: 'checking',
  errorMessage: null,
};



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: (state, {payload}: PayloadAction<User>) => {
      (state.status = 'authenticated'),
        (state.uid = payload.uid),
        (state.email = payload.email),
        (state.password = payload.password);
    },
    onLogout: (state, {payload}) => {
      (state.status = 'not-authenticated'),
        (state.email = null),
        (state.password = null),
        (state.uid = null),
        (state.errorMessage = payload.errorMessage);
    },
  },
});

export const {onLogin, onLogout} = authSlice.actions;
