import { configureStore } from "@reduxjs/toolkit"
import cartSliceReducer from "./cartSlice"
import productListSliceReducer from "./productListSlice"

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    ProductList: productListSliceReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
