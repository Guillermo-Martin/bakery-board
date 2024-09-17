import { configureStore, createSlice } from "@reduxjs/toolkit";


// ---------- Slices ----------
// example slice
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  // "combined reducers"
  reducers: {
    //
  }
});

// example slice 2
const itemsSlice = createSlice({
  name: "item",
  initialState: "chocolate croissant",
  reducers: {
    //
  }
});



// ---------- Create the Redux Store ----------
const store = configureStore({
  // ----- THE APP'S ENTIRE STATE (the state object) ----- 
  reducer: {
    counter: counterSlice.reducer,
    item: itemsSlice.reducer,
  }
});

// Export the Redux Store for use in the entire app
export { store };

// "Action creators" are created for each "type" in the "combined reducers".
// These can be found on the slice's ".actions" property:
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// console.log(counterSlice.reducer);


// TODOS:
// 1. better organize slices (improve file and folder structure)