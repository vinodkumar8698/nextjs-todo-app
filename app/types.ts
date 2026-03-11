import type { CSSProperties, ChangeEventHandler, HTMLInputTypeAttribute } from "react"

export interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
  quantity?: number
}
export interface CartState {
  cart: {
    cartItems: Product[]
  }
}
export interface PRODUCT_LIST {
  ProductList: {
    data: []
    loading: boolean
    error: null
  }
}

export interface INPUT_PROPS {
  type?: HTMLInputTypeAttribute
  min?: number
  max?: number
  defaultValue?: number
  placeholder?: string
  style?: CSSProperties
  onChange?: ChangeEventHandler<HTMLInputElement>
}
