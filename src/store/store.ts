import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { authSlice } from './slices/authSlice';

export const store = configureStore({
    reducer:{
        auth:authSlice.reducer
    }    
})



//Hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch