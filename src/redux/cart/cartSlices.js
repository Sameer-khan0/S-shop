import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addTocart, EditcartItem, DeletecartItem } from "./cartFunctions";

const productsSlice = createSlice({
  name: "cart",
  initialState: {
    cartlist: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartlist = action.payload;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'An error occurred';
      })
      .addCase(addTocart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTocart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartlist.push(action.payload.product);
        state.error = null;
      })
      .addCase(addTocart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'An error occurred';
      })
      .addCase(EditcartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(EditcartItem.fulfilled, (state, action) => {
        state.loading = false;
        const itemIndex = state.cartlist.findIndex(item => item.productId === action.payload.productId);
        if (itemIndex !== -1) {
          state.cartlist[itemIndex] = {
            ...state.cartlist[itemIndex],
            quantity: action.payload.quantity
          };
        }
        state.error = null;
      })
      .addCase(EditcartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'An error occurred';
      })
      .addCase(DeletecartItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeletecartItem.fulfilled, (state, action) => {
        state.loading = false;
        const newlist=state.cartlist.filter(e=>e.productId !== action.payload.productId)
        state.cartlist=newlist
        state.error = null;
      })
      .addCase(DeletecartItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'An error occurred';
      })
  },
});

export default productsSlice.reducer;
