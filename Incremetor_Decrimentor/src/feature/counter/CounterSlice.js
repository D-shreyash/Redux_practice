import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increament:(state,action)=>{
            state.value+=1;
        },
        decrement:(state,action)=>{
            state.value-=1;
        },
        setZero:(state,action)=>{
            state.value=0;
        }
    },
});

export const {increament,decrement,setZero} = CounterSlice.actions

export default CounterSlice.reducer;