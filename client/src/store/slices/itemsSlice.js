import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "item",
  initialState: "chocolate croissant",
  reducers: {
    //
  }
});

export const itemsReducer = itemsSlice.reducer;

// ---------- Things to export and do: ----------
// 1. all the action creators in the combined reducer
//    export const { actionCreator1, actionCreator2 } = counterSlice.actions;
// X 2. export the combined reducer
// export const itemsReducer = itemsSlice.reducer;
// X 3. import the combined reducer into the Redux Store
//    import { itemReducer } from "./slices/itemsSlice";
// X 4. put the combinedReducer into the Redux store
// 5. import the action creators into the Redux store
// import { actionCreator1, actionCreator2 } from "./slices/itemsSlice"
// 6. export all action creators from inside the Redux store