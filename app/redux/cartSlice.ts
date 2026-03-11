import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../types"

const initialCartState = {
  cartItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : ([] as unknown[])
}
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      try {
        state.cartItems.push(action.payload)
        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      } catch (error) {
        console.log("🚀addToCart slice fun ~~ error:", error)
      }
    },
    removeFromCart: (state, action) => {
      try {
        state.cartItems = state.cartItems.filter(
          (item: Product) => item.id !== action.payload.id
        )
        localStorage.setItem(
          "cart",
          state.cartItems.length ? JSON.stringify(state.cartItems) : "[]"
        )
      } catch (error) {
        console.log("🚀removeFromCart slice fun ~~ error:", error)
      }
    },
    updateCart: (state, action) => {
      try {
        state.cartItems.forEach((item: Product) =>
          item.id === action.payload.id
            ? ((item.quantity = action.payload.value),
              (item.price = item.price * action.payload.value))
            : 1
        )

        localStorage.setItem("cart", JSON.stringify(state.cartItems))
      } catch (error) {
        console.log("🚀removeFromCart slice fun ~~ error:", error)
      }
    }
    // clearCart: (state) => {
    //   if (state.value > 0) state.value = 0
    // }
  }
})

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions
export default cartSlice.reducer
