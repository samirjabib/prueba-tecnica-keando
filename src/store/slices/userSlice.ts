import {createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User{
  uid:string,
  email:string,
  password:string,
}

interface ParksUser{
    users?: User[]
}

const initialState: ParksUser = {
    users:[]
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUsers: (state, {payload}:PayloadAction<User[]>) => {
        state.users = payload
    }
  },
});

export const { getUsers } = authSlice.actions
