import { createSlice } from "@reduxjs/toolkit";

/**Initial state
 * it can be empty */
const initialState = {
  loading: false,
  getAll: [],
  error: "",
};
//creating a slice for test
export const testSlice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    testRequest: (state, action) => {
      state.loading = true;
    },
    testSuccess: (state, action) => {
      state.loading = false;
      state.getAll = action.payload; // getting message from payload passed to testSuccess action
    },
    testFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload.error; // getting error from payload passed to testFailure action
    },
  },
});
//getting all actions
export const { testRequest, testFailure, testSuccess } = testSlice.actions;
//exporting slice as a reducer
export default testSlice.reducer;
