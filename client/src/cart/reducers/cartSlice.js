import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1;
        },
        empty: (state) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, empty } = cartSlice.actions;

export default cartSlice.reducer;