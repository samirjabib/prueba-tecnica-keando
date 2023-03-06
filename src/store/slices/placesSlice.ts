import {PermissionStatus} from 'react-native-permissions';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Location } from '../../types';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: Location
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
