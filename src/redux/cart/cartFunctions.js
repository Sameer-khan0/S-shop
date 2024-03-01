import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST, GET_CART, ADD_CART, EDIT_CART, DELETE_CART } from "../../assets/APIS";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(HOST + GET_CART, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const addTocart = createAsyncThunk(
  "cart/addTocart",
  async ({product,showalert}, thunkAPI) => {
    const data = { productId: product._id,product:product };
    try {
      const response = await axios.post(HOST + ADD_CART, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      showalert(response.data.message,true,true)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const EditcartItem = createAsyncThunk(
  "cart/EditcartItem",
  async ({id,quantity,showalert}, thunkAPI) => {
    const data = { "productId":id,"quantity":quantity };
    try {
      const response = await axios.put(HOST + EDIT_CART, data, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      showalert("Product is updated",true,true)
      return response.data;
    } catch (error) {
      showalert(error.message,false,false)
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

 
export const DeletecartItem = createAsyncThunk(
  "cart/DeletecartItem",
  async ({ id, showalert }, thunkAPI) => {
    const datatoSend = { productId: id }; 
    try {
      const response = await axios.delete(HOST + DELETE_CART, {
        data: datatoSend,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      showalert("Product is deleted", false, false);
      return response.data;
    } catch (error) {
      showalert(error.message, false, false);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
