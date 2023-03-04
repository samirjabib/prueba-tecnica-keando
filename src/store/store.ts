import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";


import { authSlice, userSlice ,permissionsSlice} from './slices';
import { useDispatch } from 'react-redux';


const persistConfig = {
    key:'root',
    storage:AsyncStorage,
}

const rootReducer = combineReducers({
    auth:authSlice.reducer,
    users:userSlice.reducer,
    permissions:permissionsSlice.reducer
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