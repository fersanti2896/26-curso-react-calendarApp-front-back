import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { caldendarSlice } from './calendar';
import { uiSlice } from './ui';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: caldendarSlice.reducer
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});