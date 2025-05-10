import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },

    reducers: {
        // actions kevay = increment
        increment: state => {
            state.value += 1
        },
        reset: state => {
            state.value = 0
        },
        // actions kevay = decrement
        decrement: state => {
            state.value -= 1
        },
        // actions kevay = incrementByAmount
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload) // action.payload -> state.value ni undar action.payload ma je value ave che e update kari de
        }
    }
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer