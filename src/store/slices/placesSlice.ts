import {PermissionStatus} from 'react-native-permissions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

export const placesSlice = createSlice({
  name: 'permissions',
  initialState: {
    isLoading: true,
    userLocation: undefined,
  } as PlacesState,
  reducers: {},
});

export const {} = placesSlice.actions;
