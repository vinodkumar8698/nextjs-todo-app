import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchData } from "../utils/fetchData"

const initialProductState = {
  data: [],
  loading: false,
  error: null as string | null
}

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (url: string) => {
    const result = await fetchData(url)
    return result
  }
)

const ProductListSlice = createSlice({
  name: "productsList",
  initialState: initialProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = null
    })
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || "Failed to fetch products"
      state.data = []
    })
  }
})

export default ProductListSlice.reducer
