import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../../data/data.json'

interface User{
  uid:string,
  email:string,
  password:string,
}

interface ParksUser{
    users?: User[]
}

const initialState: ParksUser = {
    users:data
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    
  },
});


