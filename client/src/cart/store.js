import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../cart/reducers/cartSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
    }
})