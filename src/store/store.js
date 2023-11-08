
import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slice/course.slice";
import userSlice from "./slice/user.slice";

const store = configureStore({
  reducer: {
    course: courseSlice,
    user: userSlice,
    
  },
});

export default store;