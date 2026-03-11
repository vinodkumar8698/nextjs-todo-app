import { configureStore } from "@reduxjs/toolkit"
import cartSliceReducer from "./cartSlice"
import productListSliceReducer from "./productListSlice"

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    ProductList: productListSliceReducer
  }
})
