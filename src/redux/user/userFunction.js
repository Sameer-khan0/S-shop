import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { HOST, GET_USER } from "../../assets/APIS";

export const fetchUser = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(HOST + GET_USER, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      return response.data.userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
