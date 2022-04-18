import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
    },
    reducers: {
        incrementCart: (state) => {
            state.value += 1
        },
        decrementCart: (state) => {
            state.value -= 1;
        },
        emptyCart: (state) => {
            state.value = 0;
        }
    }
})

export const { incrementCart, decrementCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;