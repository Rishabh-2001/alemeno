import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../db/firebase.db";

export const getUserById = createAsyncThunk("user/id", async (id, thunkAPI) => {
  try {
    // console.log("POSTS::",postData);
    const resp = await getUser(id);
    return resp?.data;
  } catch (err) {
    console.log("ERR:", err);
    return thunkAPI.rejectWithValue(err);
  }
});

const initialState = {
  loading: false,
  error: null,
  userData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action?.payload;
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
