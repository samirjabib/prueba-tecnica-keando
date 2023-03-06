import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Location} from '../../types';

export interface PlacesState {
  isLoading: boolean;
  userLocation?: Location;
  initialPosition?: Location;
}

export const locationSlice = createSlice({
  name: 'permissions',
  initialState: {
    isLoading: true,
    userLocation: undefined,
  } as PlacesState,
  reducers: {
    setUserLocation: (state, {payload}: PayloadAction<Location>) => {
      state.userLocation = payload;
    },
    setInitialPosition: (state, {payload}: PayloadAction<Location>) => {
      state.initialPosition = payload;
    },
    setIsLoading: (state, {payload}: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
  },
});

export const {setUserLocation, setInitialPosition, setIsLoading} = locationSlice.actions;
