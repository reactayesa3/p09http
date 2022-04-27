import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './stateSlice';

export const store = configureStore({
    reducer: {
        appState: sliceReducer
    }
})