import { PermissionStatus } from 'react-native-permissions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface PermissionsState{
    locationStatus: PermissionStatus 
}

export const initialState: PermissionsState ={
    locationStatus:'unavailable'
}


export const permissionsSlice = createSlice({
    name:'permissions',
    initialState,
    reducers:{
        askLocationPermission: (state, { payload } :PayloadAction<PermissionStatus>) => {
            state.locationStatus = payload
        },
    }
})

export const { askLocationPermission } = permissionsSlice.actions