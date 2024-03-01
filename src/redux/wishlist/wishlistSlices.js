import { createSlice } from "@reduxjs/toolkit";
import { fetchWishlist, addTowishlist, DeleteWishlisitem } from "./wishlistFunctions";

const productsSlice = createSlice({
  name: "Wishlist",
  initialState: {
    wishlist: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
        state.error = null;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'An error occurred';
      })
      .addCase(addTowishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTowishlist.fulfilled, (state, action) => {
        state.loading = false;
        if(action.payload.product) {
          state.wishlist.push(action.payload.product)
        } 
        state.error = null;
      })
      .addCase(addTowishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'An error occurred';
      })
      .addCase(DeleteWishlisitem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DeleteWishlisitem.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = state.wishlist.filter(e=>e._id !== action.payload.productId)
        state.error = null;
      })
      .addCase(DeleteWishlisitem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ? action.payload.error : 'An error occurred';
      })
      // .addCase(DeletecartItem.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(DeletecartItem.fulfilled, (state, action) => {
      //   state.loading = false;
      //   const newlist=state.cartlist.filter(e=>e.productId !== action.payload.productId)
      //   state.cartlist=newlist
      //   state.error = null;
      // })
      // .addCase(DeletecartItem.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload ? action.payload.error : 'An error occurred';
      // })
  },
});

export default productsSlice.reducer;
