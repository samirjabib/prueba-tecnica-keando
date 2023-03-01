import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from '../../data/data2.json'

export interface UsersPark {
  uid:        string;
  firstName:  string;
  lastName:   string;
  picture:    string;
  phone:      number;
  id:         number;
  email:      string;
  country:    string;
  state:      string;
  city:       string;
  address:    string;
  birthday:   string;
  mainRol:    string;
  companyRol: string;
  workingIn:  string[];
  modules:    any[];
  badge:      string[];
}


interface ParksUser{
    users?: UsersPark[]
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


