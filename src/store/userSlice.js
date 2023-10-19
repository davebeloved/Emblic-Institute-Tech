import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  loading: false,
  regErr: null,
};

export const signinUser = createAsyncThunk(
  "user/signinUser",
  async (usercredentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://apiservice.estudylite.com/api/register",
        usercredentials
      );
      return response.data;
      console.log(response.data.data);
    } catch (error) {
      rejectWithValue(error.response.data.message);
      console.log(error.response.data);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state) => {
       return {...state, loading: true}
      })
      builder.addCase(signinUser.fulfilled, (state, action) => {
              return { ...state, loading: false, user: action.payload };

      })
      builder.addCase(signinUser.rejected, (state, action) => {
          return { ...state, loading: false, regErr: action.errors.message };

      })


      

  },
});

export default userSlice.reducer;
