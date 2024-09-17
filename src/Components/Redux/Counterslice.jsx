import {createSlice} from "@reduxjs/toolkit"
import { decrement, decrementByAmount, incrementByAmount } from "../../../../project/src/Components/Redux/CounterSlice";

const CounterSlice = createSlice({
    name:"counter",
    intialState:{
        value:0
    },
    reducers:{
        increment: (State)=>{
            State.value += 1;
        },
        decrement: (State)=>{
            State.value =- 1;
        },
        incrementByAmount: (State,action) =>{
            State.value += action.payload;
        },
        decrementByAmount: (State,action) =>{
            State.value += action.payload;
        }
    }
})

export const {increment,decrement,incrementByAmount,decrementByAmount} = CounterSlice.actions;

export default CounterSlice.reducers;