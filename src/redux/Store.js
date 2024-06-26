import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import cartReducer from "./Slices/CartSlice";
export const store = configureStore({
    reducer:{
        cart: cartReducer,
    }
});