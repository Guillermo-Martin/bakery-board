import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/itemsSlice";
import { counterReducer } from "./slices/counterSlice";


// ---------- Create the Redux Store ----------
const store = configureStore({
  // ----- THE APP'S ENTIRE STATE (the state object) ----- 
  reducer: {
    counter: counterReducer,
    item: itemsReducer,
  }
});

// Export the Redux Store for use in the entire app
export { store };

// "Action creators" are created for each "type" in the "combined reducers".
// These can be found on the slice's ".actions" property:
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;


// TODOS:
// 1.  Export any action creators