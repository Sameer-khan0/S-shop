import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productslices';
import cartReducser from './cart/cartSlices';
import wishlistReducer from './wishlist/wishlistSlices';
import userReducer from './user/userSlices'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducser,
    wishlist: wishlistReducer,
    user: userReducer
  },
});

export default store;
