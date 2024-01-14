import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import themeReducer from './themeSlice';
export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    theme: themeReducer,
  }
});