import { createSlice } from "@reduxjs/toolkit";

// example slice (FOR REFERENCE; CAN DELETE LATER)
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  // "combined reducers"
  reducers: {
    //
  }
});


export const counterReducer = counterSlice.reducer;

// ---------- Things to export and do: ----------
// 1. all the action creators in the combined reducer
//    export const { actionCreator1, actionCreator2 } = counterSlice.actions;
// X 2. export the combined reducer
// export const counterReducer = counterSlice.reducer;
// X 3. import the combined reducer into the Redux Store
// import { counterReducer } from "./slices/counterSlice";
// X 4. put the combinedReducer into the Redux store
// 5. import the action creators into the Redux store
// import { actionCreator1, actionCreator2 } from "./slices/counterSlice"
// 6. export all action creators from inside the Redux store