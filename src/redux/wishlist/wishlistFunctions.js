import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  HOST,
  GET_WISHLIST,
  ADD_WISHLIST,
  EDIT_WISHLIST,
  DELETE_WISHLIST,
} from "../../assets/APIS";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(HOST + GET_WISHLIST, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addTowishlist = createAsyncThunk(
  "wishlist/addTowishlist",
  async ({ product, showalert }, thunkAPI) => {
    const data = { productId: product._id };
    try {
      const response = await axios.post(HOST + ADD_WISHLIST, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      showalert(response.data.message, true, true);
      return response.data;
    } catch (error) {
      showalert(error.data.message || "Something went wrong", false, false);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const DeleteWishlisitem = createAsyncThunk(
  "wishlist/DeleteWishlisitem",
  async ({ id, objectId, showalert }, thunkAPI) => {
    const data = { productId: id, objectId: objectId };
    try {
      const response = await axios.put(HOST + EDIT_WISHLIST, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      showalert(response.data.message || "Product is deleted", false, false);
      return response.data;
    } catch (error) {
      showalert(error.data.message || "Something went wrong", false, false);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const DeletecartItem = createAsyncThunk(
  "wishlist/DeletecartItem",
  async ({ id, objectId, showalert }, thunkAPI) => {
    const datatoSend = { productId: id, objectId: objectId };
    try {
      const response = await axios.delete(HOST + DELETE_CART, {
        data: datatoSend,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      showalert(response.data.message, true, true);
      return response.data;
    } catch (error) {
      showalert(error.message, false, false);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
