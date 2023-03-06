import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";


import { authSlice, userSlice ,permissionsSlice, locationSlice } from './slices';
import { useDispatch } from 'react-redux';
import { mapSlice } from './slices/mapSlice';


const persistConfig = {
    key:'root',
    storage:AsyncStorage,
    blacklist:["maps"]
}

const rootReducer = combineReducers({
    auth:authSlice.reducer,
    users:userSlice.reducer,
    permissions:permissionsSlice.reducer,
    places:locationSlice.reducer,
    map:mapSlice.reducer
})


const persistedReducer = persistReducer( persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })   
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 


export const persistor = persistStore(store)