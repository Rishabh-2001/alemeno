
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getAllCourses, getACourse} from "../../db/firebase.db";



export const getCourses=createAsyncThunk('allCourses', async (postData,thunkAPI)=>{
  try{
      // console.log("POSTS::",postData);
     const resp=await getAllCourses();
     
     return resp?.data;
  }
  catch(err){
      console.log("ERR:",err);
      return thunkAPI.rejectWithValue(err)
  }
})

export const getCourseById=createAsyncThunk('course/id',  async (id,thunkAPI)=>{
  try{
      // console.log("POSTS::",postData);
     const resp= await getACourse(id);
     return resp?.data;
  }
  catch(err){
      console.log("ERR:",err);
      return thunkAPI.rejectWithValue(err)
  }
})


const initialState = {
  loading: false,
  error: null,
  courseData: [],
  categories : [
    {
      id: 1,
      name: "DSA",
      key: "dsa",
    },
    {
      id: 2,
      name: "Frontend Development",
      key: "frontend",
    },
    {
      id: 3,
      name: "Testing",
      key: "testing",
    },
  ],
  
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCourses.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.courseData=action?.payload;
    });
    builder.addCase(getCourses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default courseSlice.reducer;
