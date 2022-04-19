import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        value: 0,
    },
    reducers: {
        incrementWishlist: (state) => {
            state.value += 1;
        },
        decrementWishlist: (state) => {
            state.value -= 1;
        },
        emptyWishlist: (state) => {
            state.value = 0;
        }
    }
})

export const { incrementWishlist, decrementWishlist, emptyWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;