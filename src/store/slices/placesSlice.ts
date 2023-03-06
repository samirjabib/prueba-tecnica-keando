import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Location } from '../../types';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: Location
  initialPosition?: Location
}

export const placesSlice = createSlice({
  name: 'permissions',
  initialState: {
    isLoading: true,
    userLocation: undefined,
  } as PlacesState,
  reducers: {
    setUserLocation : (state, {payload} : PayloadAction<Location>) => {
      state.userLocation = payload
    },
    setInitialPosition: (state, { payload } : PayloadAction<Location>) => {
      state.initialPosition = payload
    }

  },
});

export const {setUserLocation, setInitialPosition} = placesSlice.actions;
