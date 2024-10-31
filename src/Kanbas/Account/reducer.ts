import * as db from "../Database";
import { createSlice } from "@reduxjs/toolkit";
const emptyStringArray : String[] = [];
const initialState = {
  currentUser: null,
  enrollments: emptyStringArray
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      if (action.payload === null) {
        state.enrollments = []
      }
      else {
      state.enrollments = db.enrollments.filter((enrollment)=>enrollment.user === action.payload._id).map((enrollment)=> enrollment.course)}
    },
    enroll: (state, action) => {
      state.enrollments = [...state.enrollments, action.payload]
    },
    unenroll: (state, action) => {
      state.enrollments = state.enrollments.filter((enrollment)=>enrollment != action.payload)
    }
  },
});
export const { setCurrentUser, enroll, unenroll } = accountSlice.actions;
export default accountSlice.reducer;