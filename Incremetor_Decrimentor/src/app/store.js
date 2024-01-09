import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../feature/counter/CounterSlice'

export const store = configureStore({
    reducer:CounterReducer,
})