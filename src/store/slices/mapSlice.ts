import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {  MarkerView } from '@rnmapbox/maps';

export interface MapState{
    isMapReady: boolean
    map?:any
}

export const initialState: MapState ={
    isMapReady:false,
    map:MarkerView
}


export  const mapSlice = createSlice({
    name:'permissions',
    initialState,
    reducers:{
        setMap:(state, { payload } : PayloadAction<MapState>) => {
            state.isMapReady = true
            state.map = payload
        }
    }
})

export const { setMap  } = mapSlice.actions