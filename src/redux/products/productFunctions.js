import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST, GET_PRODUCTS } from "../../assets/APIS";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(HOST + GET_PRODUCTS);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);
