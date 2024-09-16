import { configureStore, createSlice } from "@reduxjs/toolkit";


// ---------- Slices ----------
// example slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  // "combined reducers"
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});



// create the Redux Store
const store = configureStore({
  // the state object 
  reducer: {
    counter: counterSlice.reducer
  }
});

// export the Redux Store
export { store };

// "Action creators" are created for each "type" in the "combined reducers".
// These can be found on the slice's ".actions" property:
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// console.log(counterSlice.reducer);