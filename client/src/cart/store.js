import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../cart/reducers/cartSlice'
import wishlistReducer from "./reducers/wishlistSlice";

export default configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer
    }
})